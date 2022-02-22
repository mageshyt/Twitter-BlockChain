import React, { useState } from 'react'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { VscTwitter } from 'react-icons/vsc'
import NavOptions from './NavOptions'
import styled from 'styled-components'
import { navItems } from '../assets/NaviItems-data'
import { GiFeather } from 'react-icons/gi'
import Link from 'next/link'
const styles = {
  wrapper: 'flex-[0.7]   px-4 lg:px-8  flex flex-col  ',
  TwitterContainerStyle: 'text-3xl m-4 text-sky-400',
  NavContainer: 'flex-1  ',
  MintBtn:
    'text-white bg-sky-500 h-[50px] cursor-pointer p-2 hover:bg-sky-400 rounded-full flex justify-center items-center',
  profileDetails: 'flex space-x-2 ',
  RightProfileContainer: 'flex mb-2',
}

const SliderBar = () => {
  // ! for active state
  const [Active, setActive] = useState('Home')
  return (
    <Wrapper className={styles.wrapper}>
      <TwitterContainer className={styles.TwitterContainerStyle}>
        <Link href="/">
          <VscTwitter className={'cursor-pointer'} />
        </Link>
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
      <ProfileContainer className={styles.ProfileContainerStyle}>
        {/* left profile */}
        <div></div>
        {/* right profile */}
        <div className={styles.RightProfileContainer}>
          {/* Details */}
          <div className={styles.profileDetails}>
            {/* logo */}
            <div>
              <img
                src="/logo.webp"
                className="visible mb-2 h-12 w-12 rounded-full border-2  border-sky-400 md:hidden"
                alt=""
              />
            </div>
            <div className="hidden flex-col md:flex">
              <span className="text-lg font-medium">MageshYT</span>
              <span className="text-lg text-gray-400">@0x9a9...054D8</span>
            </div>
            {/* More container */}
          </div>
          <div className="hidden flex-col md:flex">
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
