import { useRouter } from 'next/router'
import React from 'react'

const styles = {
  wrapper:
    'flex w-min cursor-pointer items-center mb-3 transition-all hover:duration-200  hover:ease-in-out space-x-3 rounded-full p-4 text-lg  hover:bg-[#333c45]',
  nameStyle: 'font-medium hidden md:inline-block ',
}
const NavOptions = ({
  name,
  isActive,
  setSelected,
  Icon,
  IconFill,
  redirect,
}) => {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        setSelected(name)
        if (redirect) {
          router.push(redirect)
        }
      }}
      className={
        isActive === name ? `${styles.wrapper} bg-[#333c45]` : styles.wrapper
      }
    >
      {isActive === name && IconFill ? (
        <IconFill className="text-white" />
      ) : (
        <Icon className="text-white" />
      )}
      <span
        className={
          isActive === name
            ? `${styles.nameStyle} font-bold`
            : `${styles.nameStyle} font-medium`
        }
      >
        {name}
      </span>
    </div>
  )
}

export default NavOptions
