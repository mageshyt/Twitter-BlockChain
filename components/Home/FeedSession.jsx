import React from 'react'
import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from './Post'


import { tweet } from '../../lib/dummyData'
const style = {
  wrapper: `w-full border-r border-l  border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const FeedSession = () => {
  return (
    <div className={`${style.wrapper}`}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars className="text-white" />
      </div>
      {/* Tweet box */}
      <TweetBox />
      {/*  render the tweet */}
      {tweet.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          username={tweet.username}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImage}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default FeedSession
