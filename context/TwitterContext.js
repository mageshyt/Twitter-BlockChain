import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import { client } from '../lib/clinet'
export const TwitterContext = createContext()

// ! providers
export const TwitterProvider = ({ children }) => {
  // ! app status
  const [appStatus, SetAppStatus] = useState('notConnected')
  // ! current Account
  const [currentAccount, SetCurrentAccount] = useState('')
  // ! for tracking our tweets
  const [tweets, SetTweets] = useState([])
  // ! for tracking our current user
  const [currentUser, SetCurrentUser] = useState({})
  // * router
  const router = useRouter()
  useEffect(() => {
    checkIsWalletConnected()
  }, [currentAccount])

  useEffect(() => {
    if (!currentAccount || appStatus !== 'connected') return
    getCurrentUserDetails()
    fetchTweets()
  }, [currentAccount, appStatus])
  // ! create account
  const createUserAccount = async (userAddress = currentAccount) => {
    if (!window.ethereum) return SetAppStatus('noMetamask')
    try {
      const userDoc = {
        _type: 'users',
        _id: userAddress,
        name: 'Unnamed',
        isProfileImageNft: false,
        profileImage: 'https://avatars.githubusercontent.com/u/70838644?v=4',
        walletAddress: userAddress,
      }
      //! if user doesn't exist, create it
      await client.createIfNotExists(userDoc)
      SetAppStatus('connected')
    } catch (e) {
      router.push('/')
      SetAppStatus('error')
    }
  }
  // ! for checking if our wallet is connected or not
  const checkIsWalletConnected = async () => {
    if (!window.ethereum) return SetAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        // you are connected
        SetAppStatus('connected')
        SetCurrentAccount(addressArray[0]) // ! by default we will connect to first account`
        createUserAccount(addressArray[0])
      } else {
        // you are not connected
        SetAppStatus('notConnected')
      }
    } catch (error) {
      console.log(error)
    }
  }
  // ! for connecting to the wallet
  const connectToWallet = async () => {
    if (!window.ethereum) return SetAppStatus('noMetaMask')
    try {
      SetAppStatus('loading')
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      if (addressArray.length > 0) {
        SetCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        SetAppStatus('notConnected')
      }
    } catch (error) {
      SetAppStatus('error')
    }
  }

  // ! now we are going to fetch the tweets
  const fetchTweets = async () => {
    const query = `
     *[_type == "tweets"]{
        "author": author->{name, walletAddress, profileImage, isProfileImageNft},
        tweet,
        likes,
        comments,
        timestamp
      }|order(timestamp desc)
    `
    SetTweets([])
    const sanityResponse = await client.fetch(query)
    sanityResponse.forEach(async (item) => {
      const newItem = {
        tweet: item.tweet,
        timestamp: item.timestamp,
        author: {
          name: item.author.name,
          walletAddress: item.author.walletAddress,
          profileImage: item.profileImageUrl,
          isProfileImageNft: item.author.isProfileImageNft,
        },
        likes: item.likes,
        comments: item.comments,
      }

      SetTweets((prevState) => [...prevState, newItem])
    })
    console.log(sanityResponse)
  }
  // ! now we are going to get current user details
  const getCurrentUserDetails = async (userAccount = currentAccount) => {
    if (appStatus !== 'connected') return

    const query = `
      *[_type == "users" && _id == "${userAccount}"]{
        "tweets": tweets[]->{timestamp, tweet}|order(timestamp desc),
        name,
        profileImage,
        isProfileImageNft,
        coverImage,
        walletAddress
      }
    `
    const response = await client.fetch(query)
    SetCurrentUser({
      name: response[0].name,
      profileImage: response[0].profileImage,
      isProfileImageNft: response[0].isProfileImageNft,
      coverImage: response[0].coverImage,
      walletAddress: response[0].walletAddress,
      walletAddress: response[0].walletAddress,
    })
  }
  return (
    <TwitterContext.Provider
      value={{
        appStatus,
        currentAccount,
        connectToWallet,
        fetchTweets,
        tweets,
        getCurrentUserDetails,
        currentUser,
        SetAppStatus,
      }}
    >
      {children}
    </TwitterContext.Provider>
  )
}
