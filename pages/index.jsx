// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import FeedSession from '../components/Home/FeedSession'
import SliderBar from '../components/SideBar'
import Widgets from '../components/Widgets'
import { TwitterContext } from '../context/TwitterContext'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `flex w-full  justify-evenly  lg:w-[80%] lg:max-w-[1900px] lg:justify-between`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
}
const Home = () => {
  const { appStatus, connectToWallet } = useContext(TwitterContext)
  console.log(appStatus)
  const app = (status = appStatus) => {
    switch ((status = appStatus)) {
      case 'connected':
        return userLoggedIn
      case 'notConnected':
        return noUserFound
      case 'noMetaMask':
        return noMetaMask
      case 'error':
        return ErrorFound

      default:
        return loading
    }
  }
  // ! for user logged in
  const userLoggedIn = (
    <div className={style.content}>
      {/* Slide bar */}
      <SliderBar />
      {/* Feed session */}
      <FeedSession />

      {/* Widgets */}
      <Widgets />
    </div>
  )
  //! loading
  const loading = (
    <div className={style.loginContainer}>
      <div className={style.loginContent}>Loading...</div>
    </div>
  )
  // ! no use found
  const noUserFound = (
    <div className={style.loginContainer}>
      <Image height={200} width={200} src="/metamask.png" />
      <div
        className={style.walletConnectButton}
        onClick={() => connectToWallet()}
      >
        Connect to Wallet
      </div>
    </div>
  )

  //! Error img
  const ErrorFound = (
    <div className={style.loginContainer}>
      <Image width={250} height={200} src="/error.png" />
      <div className={style.loginContent}>
        An error occurred. Please try again later or from another browser.
      </div>
    </div>
  )
  // ! no Metamask found
  const MetaMaskNotFound = (
    <div>
      <Image height={200} width={200} layout="fill" scr="/metamask.png" />
      {/* meta mask link */}
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://metamask.io/download.html`}
        >
          You must install Metamask, a <br /> virtual Ethereum wallet, in your
          browser.
        </a>
      </div>
    </div>
  )
  return (
    <div className="flex h-screen w-screen select-none justify-center bg-[#15202b] text-white">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {app(appStatus)}
    </div>
  )
}

export default Home
