import React, { useState } from 'react'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { VscTwitter } from 'react-icons/vsc'
import NavOptions from './NavOptions'
import styled from 'styled-components'
import { navItems } from '../assets/NaviItems-data'
import { GiFeather } from 'react-icons/gi'
const styles = {
  wrapper: 'flex-[0.7] px-4 lg:px-8  flex-col ',
  TwitterContainer: 'text-3xl m-4 text-sky-400',
  NavContainer: 'flex-1',
  MintBtn:
    'text-white bg-sky-500 h-[50px] cursor-pointer p-2 hover:bg-sky-400 rounded-full flex justify-center items-center',
  profileDetails: 'flex flex-col',
  RightProfileContainer: 'flex hidden',
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
        <MintButton className={`${styles.MintBtn} hidden md:flex`}>
          Mint
        </MintButton>

        <MintButton
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-sky-500  text-xl md:hidden `}
        >
          <GiFeather className="text-white" />
        </MintButton>
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
