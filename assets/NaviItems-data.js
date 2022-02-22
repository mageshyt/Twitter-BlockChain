import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import {
  BsPersonFill,
  BsPerson,
  BsBookmark,
  BsBookmarkFill,
} from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'
export const navItems = [
  {
    name: 'Home',
    Icon: RiHome7Line,
    Icon2: RiHome7Fill,
    redirect: '/',
  },
  {
    name: 'Explore',
    Icon: FaHashtag,
    Icon2: BiHash,
  },
  {
    name: 'Notifications',
    Icon: FiBell,
    Icon2: FaBell,
  },

  {
    name: 'Messages',
    Icon: HiOutlineMail,
    Icon2: HiMail,
  },
  {
    name: 'Bookmarks',
    Icon: BsBookmark,
    Icon2: BsBookmarkFill,
  },
  {
    name: 'Lists',
    Icon: FaRegListAlt,
    Icon2: RiFileList2Fill,
  },
  {
    name: 'Profile',
    Icon: BsPerson,
    Icon2: BsPersonFill,
    redirect: '/profile',
  },
  {
    name: 'More',
    Icon: CgMoreO,
  },
]
