import Link from 'next/link'
import React from 'react'
import { FaChartSimple } from 'react-icons/fa6'
import { GoHome } from 'react-icons/go'
import { HiOutlineUserGroup } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full flex  justify-between items-center p-4">
      <Link href={"/"}>
      <div className="gap-1 flex flex-col items-center justify-center">
      <GoHome className="" />
        <p className="text-xs">Home</p>
      </div>
      </Link>
      <Link href={"/leaderboard"}>
      <div className="gap-1 flex flex-col items-center justify-center">
      <FaChartSimple />
        <p className="text-xs">Leaderboard</p>
      </div>
      </Link>
      <Link href={"/friends"}>
      <div className="gap-1 flex flex-col items-center justify-center">
        <HiOutlineUserGroup />
        <p className="text-xs">Friends</p>
      </div>
      </Link>
    </footer>
  )
}

export default Footer