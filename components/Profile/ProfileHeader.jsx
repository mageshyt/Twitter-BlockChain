import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { TwitterContext } from '../../context/TwitterContext'

const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full  border-2 rounded-full border-sky-400`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white cursor-pointer`,
}
const ProfileHeader = () => {
  const router = useRouter()
  const { currentAccount, currentUser, tweets } = useContext(TwitterContext)
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div onClick={() => router.push('/')} className={style.backButton}>
          <BsArrowLeftShort />
        </div>
        {/* details */}
        <div className={style.details}>
          {/* name */}
          <div className={style.primary}>{currentUser.name}</div>
          <div className={style.secondary}> {tweets?.length} Tweets</div>
        </div>
      </div>
      {/* bg image */}
      <div className={style.coverPhotoContainer}>
        <img
          src="https://r4.wallpaperflare.com/658/800/994/simple-simple-background-minimalism-black-background-wallpaper_3840-2160-1540182748"
          className={style.coverPhoto}
        />
        {/* Profile image */}
      </div>
      <div className={style.profileImageContainer}>
        <div
          className={
            currentUser.isProfileImageNft ? 'hex' : style.profileImageContainer
          }
        >
          <img
            src="/logo.webp"
            className={
              currentUser.isProfileImageNft
                ? style.profileImageNft
                : style.profileImage
            }
          />
        </div>
      </div>
      {/* Deails-2 */}
      <div className={style.details}>
        {/* name */}
        <div className={style.primary}>{currentUser.name}</div>
        <div className={style.secondary}>
          {currentAccount && (
            <>
              <span>{`@${currentAccount.slice(0, 8)}...${currentAccount.slice(
                -4
              )}`}</span>
            </>
          )}
        </div>
      </div>
      {/* nav */}
      <div className={style.nav}>
        <div className={style.activeNav}>Tweets & Replies</div>
        <div className={`cursor-pointer`}>Media</div>
        <div className={`cursor-pointer`}>Likes</div>
      </div>
    </div>
  )
}

export default ProfileHeader
