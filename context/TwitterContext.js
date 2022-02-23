import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

export const TwitterContext = createContext()

// ! providers
export const TwitterProvider = ({ children }) => {
  // ! app status
  const [appStatus, SetAppStatus] = useState('not connected')
  // ! current Account
  const [currentAccount, SetCurrentAccount] = useState('')

  // * router
  const router = useRouter()
  useEffect(() => {
    checkIsWalletConnected()
  }, [])
  // ! for checking if our wallet is connected or not
  const checkIsWalletConnected = async () => {
    if (!window.ethereum) return
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.result.length > 0) {
        // you are connected
        SetAppStatus('connected')
        SetCurrentAccount(addressArray.result[0]) // ! by default we will connect to first account`
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
    if (!windows.ethereum) return
    try {
      SetAppStatus('loading')
      const addressArray = await windows.ethereum.request({
        method: 'eth_requestAccounts',
      })
      if (addressArray.length > 0) {
        SetCurrentAccount(addressArray[0])
      } else {
        router.push('/')
        SetAppStatus('notConnected')
      }
    } catch (error) {
      SetAppStatus('error')
    }
  }

  return (
    <TwitterContext.Provider
      value={{
        appStatus,
        currentAccount,
        connectToWallet,
      }}
    >
      {children}
    </TwitterContext.Provider>
  )
}
