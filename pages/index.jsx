// import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import FeedSession from '../components/Home/FeedSession'
import SliderBar from '../components/SideBar'
import Widgets from '../components/Widgets'
import { TwitterContext } from '../context/TwitterContext'
const Home = () => {
  const { appStatus, connectWallet } = useContext(TwitterContext)
  return (
    <div className="flex h-screen w-screen select-none justify-center bg-[#15202b] text-white">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full  justify-evenly  lg:w-[80%] lg:max-w-[1900px] lg:justify-between">
        {/* Slide bar */}
        <SliderBar />
        {/* Feed session */}
        <FeedSession />

        {/* Widgets */}
        <Widgets />
      </div>
    </div>
  )
}

export default Home
