import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaChartSimple } from 'react-icons/fa6'
import { GoHome } from 'react-icons/go'
import { HiOutlineUserGroup } from 'react-icons/hi'

const Footer : React.FC = () => {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  return (
    <footer className="no-event  absolute bottom-0 w-full flex  justify-between items-center p-4">
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