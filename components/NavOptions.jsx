import React from 'react'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { VscTwitter } from 'react-icons/vsc'
import { AiOutlineHome } from 'react-icons/ai'

const styles = {
  wrapper:
    'flex w-min cursor-pointer items-center mb-3 transition-all hover:duration-200  hover:ease-in-out space-x-3 rounded-full p-4 text-lg  hover:bg-[#333c45]',
}
const NavOptions = ({
  name,
  isActive,
  setSelected,
  Icon,
  IconFill,
  redirect,
}) => {
  return (
    <div
      onClick={() => setSelected(name)}
      className={
        isActive === name ? `${styles.wrapper} bg-[#333c45]` : styles.wrapper
      }
    >
      {isActive === name && IconFill ? (
        <IconFill className="text-white" />
      ) : (
        <Icon className="text-white" />
      )}
      <span className={isActive === name ? 'font-bold' : 'font-medium'}>
        {name}
      </span>
    </div>
  )
}

export default NavOptions
