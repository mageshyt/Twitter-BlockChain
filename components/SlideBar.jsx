import React, { useState } from 'react'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { VscTwitter } from 'react-icons/vsc'
import { AiOutlineHome } from 'react-icons/ai'
import NavOptions from './NavOptions'
import styled from 'styled-components'
import { navItems } from '../assets/NaviItems-data'
const styles = {
  wrapper: 'flex-[0.7] px-8 flex flex-col',
  TwitterContainer: 'text-3xl m-4',
  NavContainer: 'flex-1',
  MintBtn:
    'text-white bg-blue-500 h-[50px] cursor-pointer p-2 hover:bg-blue-600 rounded-full flex justify-center items-center',
  profileDetails: 'flex flex-col',
  RightProfileContainer: 'flex',
}

const SliderBar = () => {
  // ! for active state
  const [Active, setActive] = useState('Home')
  return (
    <Wrapper className={styles.wrapper}>
      <TwitterContainer className={styles.TwitterContainer}>
        <VscTwitter />
      </TwitterContainer>
      {/* // nav container */}
      <NavContainer className={styles.NavContainer}>
        {navItems.map((item) => (
          <NavOptions
            key={item.name}
            name={item.name}
            isActive={Active}
            setSelected={setActive}
            Icon={item.Icon}
            IconFill={item.Icon2}
            redirect={item.redirect ? item.redirect : null}
          />
        ))}
        {/*  // !Mint btn */}
        <MintButton className={styles.MintBtn}> Mint</MintButton>
      </NavContainer>

      {/* Profile session */}
      <ProfileContainer className={styles.ProfileContainer}>
        {/* left profile */}
        <div></div>
        {/* right profile */}
        <div className={styles.RightProfileContainer}>
          {/* Details */}
          <div className={styles.profileDetails}>
            <span className="text-xl font-medium">MageshYT</span>
            <span className="text-xl text-gray-400">@0x9a9...054D8</span>
            {/* More container */}
          </div>
          <div>
            <FiMoreHorizontal />
          </div>
        </div>
      </ProfileContainer>
    </Wrapper>
  )
}

export default SliderBar

const Wrapper = styled.div``

const TwitterContainer = styled.div``
const NavContainer = styled.div``
const MintButton = styled.div``

const ProfileContainer = styled.div``
