import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
// import checkMark from '/check.png'
import { useRouter } from 'next/router'
import { TwitterContext } from '../../context/TwitterContext'

const style = {
  wrapper: `h-[21rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
  title: `font-semibold text-xl mb-6`,
  closeButton: `mt-6 bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
}
const FinishedState = () => {
  const router = useRouter()
  const { getCurrentUserDetails } = useContext(TwitterContext)
  useEffect(() => {
    getCurrentUserDetails()
  })
  return (
    <div className={style.wrapper}>
      {/* out minting is finished 😀 */}
      <div className={style.title}>Minting finished!</div>

      <img src="/check.png" className={'h-16 w-16 object-contain'} />

      {/* For closing */}
      <div onClick={() => router.push('/')} className={style.closeButton}>
        Close
      </div>
    </div>
  )
}

export default FinishedState
