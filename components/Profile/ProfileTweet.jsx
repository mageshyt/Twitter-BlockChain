import React, { useContext } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import { tweet } from '../../lib/dummyData'
import Post from '../Home/Post'
const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}
const ProfileTweet = () => {
  const { tweets } = useContext(TwitterContext)
  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => {
        return (
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
            avatar="/logo.webp"
            isProfileImageNft={tweet.author.isProfileImageNft}
            timestamp={tweet.timestamp}
          />
        )
      })}
    </div>
  )
}

export default ProfileTweet
