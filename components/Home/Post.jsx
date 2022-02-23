import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FiShare } from 'react-icons/fi'
import { format } from 'timeago.js'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
  wrapper: `flex p-3 border-b border-[#38444d]`,
  profileImage: `rounded-full  h-[40px] w-[40px] object-cover`,
  postMain: `flex-1 px-4`,
  headerDetails: `flex items-center space-x-2`,
  name: `font-bold mr-1`,
  verified: `text-[0.8rem]`,
  handleAndTimeAgo: `text-[#8899a6] ml-1`,
  tweet: `my-2`,
  image: `rounded-3xl`,
  footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
  footerIcon: `rounded-full text-lg p-2`,
}
const Post = ({
  displayName,
  username,
  text,
  avatar,
  timestamp,
  isProfileImageNft,
}) => {
  console.log(avatar)
  // ! for like
  const [liked, setLiked] = React.useState(false)
  return (
    <div className={style.wrapper}>
      <div>
        {/* logo */}
        <img
          src={avatar}
          className={
            isProfileImageNft
              ? `${style.profileImage}  smallHex`
              : style.profileImage
          }
          alt="user logo"
        />
      </div>
      {/* main post */}
      <div className={style.postMain}>
        <div className={style.headerDetails}>
          {/* name */}
          <span className={style.name}>{displayName}</span>
          {/* if the the image is nft then put check mark */}
          {!isProfileImageNft && (
            <span className={style.verified}>
              <BsFillPatchCheckFill />
            </span>
          )}
          {/* Time ago */}
          <span className={style.handleAndTimeAgo}>
            @{`${username.slice(0, 4)}... ${username.slice(-4)}`} •{' '}
            {format(new Date(timestamp).getTime())}
          </span>
        </div>
        {/* tweets */}
        <div>
          <p className={style.tweet}>{text}</p>
        </div>
        {/* post comment,retweet,heart,share */}
        <div className={style.footer}>
          {/* comment */}
          <div
            className={`${style.footerIcon} cursor-pointer  hover:bg-[#1e364a] hover:text-sky-400 `}
          >
            <FaRegComment />
          </div>
          {/* retweet */}
          <div
            className={`${style.footerIcon} cursor-pointer  hover:bg-[#1b393b] hover:text-green-400 `}
          >
            <FaRetweet />
          </div>
          {/* retweet */}
          <div
            className={`${style.footerIcon} cursor-pointer  hover:bg-[#39243c]  hover:text-pink-400 `}
          >
            <AiOutlineHeart onClick={() => setLiked(!liked)} />
          </div>
          {/* share */}
          <div
            className={`${style.footerIcon} cursor-pointer  hover:bg-[#1e264a]  hover:text-blue-400 `}
          >
            <FiShare />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
