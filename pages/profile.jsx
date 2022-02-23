import React from 'react'
import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileTweet from '../components/Profile/ProfileTweet'
import SideBar from '../components/SideBar'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `flex w-full justify-evenly md:max-w-[1500px] lg:w-2/3 lg:max-w-[1400px] lg:justify-between`,
  mainContent: ` w-full border-r border-l border-[#38444d] overflow-y-scroll`,
}

const Profile = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {/* side bar */}
        <SideBar />

        {/* main container */}
        <div className={style.mainContent}>
          {/* Profile Header */}
          <ProfileHeader />
          {/* Profile tweet */}
          <ProfileTweet />
        </div>
      </div>
    </div>
  )
}

export default Profile
