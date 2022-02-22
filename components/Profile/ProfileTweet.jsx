import React from 'react'
import { tweet } from '../../lib/dummyData'
import Post from '../Home/Post'
const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}
const ProfileTweet = () => {
  return (
    <div className={style.wrapper}>
      {tweet?.map((tweet, index) => {
        return (
          <Post
            key={index}
            displayName={tweet.displayName}
            username={tweet.username}
            avatar={tweet.avatar}
            text={tweet.text}
            isProfileImageNft={tweet.isProfileImage}
            timestamp={tweet.timestamp}
          />
        )
      })}
    </div>
  )
}

export default ProfileTweet
