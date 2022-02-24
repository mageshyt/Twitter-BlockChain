import React, { useContext, useEffect } from 'react'
import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from './Post'

import { tweet } from '../../lib/dummyData'
import { TwitterContext } from '../../context/TwitterContext'
const style = {
  wrapper: `w-full border-r border-l  border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const FeedSession = () => {
  const { tweets } = useContext(TwitterContext)
  return (
    <div className={`${style.wrapper}`}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars className="text-white" />
      </div>
      {/* Tweet box */}
      <TweetBox />
      {/*  render the tweet */}
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            tweet.author.name === 'Unnamed'
              ? `${tweet.author.walletAddress.slice(
                  0,
                  4
                )}...${tweet.author.walletAddress.slice(41)}`
              : tweet.author.name
          }
          username={tweet.author.walletAddress}
          text={tweet.tweet}
          avatar={tweet.author.profileImage}
          isProfileImageNft={tweet.author.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default FeedSession
