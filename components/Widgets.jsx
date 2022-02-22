import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { news, whoToFollow } from '../lib/dummyData'
const style = {
  wrapper: ` w-[600px] overflow-y-scroll p-4  hidden lg:block`,
  searchBar: `flex items-center bg-[#243340] p-2 rounded-3xl`,
  searchIcon: `text-[#8899a6] mr-2`,
  inputBox: `bg-transparent outline-none`,
  section: `bg-[#192734] my-6 rounded-xl overflow-hidden`,
  title: `p-2 font-bold text-lg`,
  showMore: `p-2 text-[#1d9bf0] hover:text-sky-400 text-sm cursor-pointer `,
  item: `flex items-center p-3 my-2 hover:bg-[#22303c] cursor-pointer`,
  newsItemLeft: `flex-1`,
  newsItemCategory: `text-[#8899a6] text-xs font-semibold`,
  newsItemTitle: `text-sm font-bold text-clip `,
  newsItemRight: `w-1/5 ml-3`,
  newsItemImage: `rounded-xl h-14 w-14 object-cover`,
  followAvatarContainer: `w-1/6`,
  followAvatar: `rounded-full h-[40px] w-[40px]`,
  profileDetails: `flex-1`,
  name: `font-bold`,
  handle: `text-[#8899a6]`,
  followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-bold`,
}
const Widgets = () => {
  return (
    <div className={style.wrapper}>
      {/* search bar */}
      <div className={style.searchBar}>
        <BiSearch className={style.searchIcon} />
        <input
          type="text"
          className={style.inputBox}
          placeholder="Search Twitter"
        />
      </div>
      {/* session -1 */}
      <div className={style.section}>
        <div className={style.title}>what's happening !</div>
        {news.map((newsItem, index) => (
          <div className={style.item} key={index}>
            {/* Left side news name and news details */}
            <div className={style.newsItemLeft}>
              <div className={style.newsItemCategory}>{newsItem.category}</div>
              <div className={style.newsItemTitle}>{newsItem.title}</div>
            </div>
            {/* Right side image */}
            <div className={style.newsItemRight}>
              <img
                className={style.newsItemImage}
                src={newsItem.image}
                alt="news"
              />
            </div>
            {/* show more */}
          </div>
        ))}
        <div className={style.showMore}>Show more</div>
      </div>
      {/* session -2 */}
      <div className={style.section}>
        <div className={style.title}>who to follow</div>
        {whoToFollow.map((item, index) => (
          <div className={style.item} key={index}>
            {/* left followAvatarContainer */}
            <div className={style.followAvatarContainer}>
              <img
                src={item.avatar}
                alt={item.handle}
                className={style.followAvatar}
              />
            </div>
            {/* right profileDetails */}
            <div className={style.profileDetails}>
              <div className={style.name}>{item.handle}</div>
              <div className={style.handle}>{item.name}</div>
            </div>
            {/* follow button */}
            <div className={style.followButton}>Follow</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Widgets
