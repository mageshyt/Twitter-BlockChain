// import type { NextPage } from 'next'
import Head from 'next/head'
import FeedSession from '../components/Home/FeedSession'
import SliderBar from '../components/SlideBar'
import Widgets from '../components/Widgets'
const Home = () => {
  return (
    <div className="flex h-screen w-screen select-none justify-center bg-[#15202b] text-white">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full justify-evenly md:max-w-[1500pc] lg:w-2/3 lg:max-w-[1400px] lg:justify-between">
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
