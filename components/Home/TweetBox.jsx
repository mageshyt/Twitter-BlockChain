import React from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'
const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `h-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2 cursor-pointer text-xl`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
}
const TweetBox = () => {
  //! for tweetMessage
  const [tweetMessage, setTweetMessage] = React.useState('')
  //! for posting tweet
  const posting = (event) => {
    event.preventDefault()
    console.log('posting')
  }
  console.log('tweetMessage', tweetMessage)
  return (
    <div className={`${style.wrapper}`}>
      {/* Left side */}
      <div className={`${style.tweetBoxLeft}`}>
        {/* logo */}
        <img src="/logo.webp" alt="" className={style.profileImage} />
      </div>
      {/* Right side */}
      <div className={`${style.tweetBoxRight}`}>
        <form>
          <textarea
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            className={style.inputField}
          />
          {/* Submit btn */}
          <div className={`${style.formLowerContainer}`}>
            {/* Take flex-1 */}
            <RenderIconsCollection />
            <button
              onClick={(event) => posting(event)}
              className={
                tweetMessage
                  ? ` ${style.activeSubmit} ${style.submitGeneral}`
                  : ` ${style.inactiveSubmit} ${style.submitGeneral}`
              }
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox

const RenderIconsCollection = () => (
  <div className={`${style.iconsContainer}`}>
    <BsCardImage className={`${style.icon}`} />
    <RiFileGifLine className={`${style.icon}`} />
    <IoMdCalendar className={`${style.icon}`} />
    <MdOutlineLocationOn className={`${style.icon}`} />
    <BsEmojiSmile className={`${style.icon}`} />
    <RiBarChartHorizontalFill className={`${style.icon}`} />
  </div>
)
