import React from 'react'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import { VscTwitter } from 'react-icons/vsc'
import Modal from 'react-modal'
import { pinFileToIPFS } from '../../lib/pinata'
import { client } from '../../lib/clinet'
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from 'react-icons/bs'
import { TwitterContext, TwitterProvider } from '../../context/TwitterContext'
import InitialState from '../MintingModle/InitialState'
import LoadingState from '../MintingModle/LoadingState'
import FinishedState from '../MintingModle/FinishedState'
const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
}
const ProfileImageMinter = () => {
  const { SetAppStatus } = useContext(TwitterContext)
  // ! status
  const [status, setStatus] = useState('initial')
  //! for tracking name
  const [name, setName] = useState('')
  // ! for tracking description
  const [description, setDescription] = useState('')
  // ! for tracking profile image
  const [profileImage, setProfileImage] = useState()
  //! mint
  const mint = async () => {
    if (!name || !description || !profileImage) return
    setStatus('loading')
    const pinataMetaData = {
      name: `${name} - ${description}`,
    }
    console.log(pinataMetaData, profileImage, description)
    pinFileToIPFS(profileImage, pinataMetaData)

    // ! setting profile image in sanity
    await client.patch()
    // console.log()
    setStatus('finished')
  }
  const modalChildren = (modalState = status) => {
    switch (modalState) {
      case 'initial':
        return (
          <InitialState
            setName={setName}
            setDescription={setDescription}
            setProfileImage={setProfileImage}
            profileImage={profileImage}
            mint={mint}
            description={description}
            name={name}
          />
        )
      case 'loading':
        return <LoadingState />
      case 'finished':
        return <FinishedState />

      default:
        router.push('/')
        SetAppStatus('error')

        break
    }
  }

  return <div className={style.wrapper}>{modalChildren(status)}</div>
}

export default ProfileImageMinter
