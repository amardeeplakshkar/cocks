"use client";
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaChartSimple } from 'react-icons/fa6'
import { GoHome } from 'react-icons/go'
import { HiOutlineUserGroup } from 'react-icons/hi'

const Footer : React.FC = () => {
  useEffect(() => {
    // Only run the DOM manipulation on the client side
    if (typeof window !== 'undefined') {
      const links = document.querySelectorAll('[data-href]');

      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = (link as HTMLElement).getAttribute('data-href');
          if (href) {
            window.open(href, '_blank', 'noopener,noreferrer');
          }
        });
      });

      // Clean up event listeners when the component is unmounted
      return () => {
        links.forEach((link) => {
          link.removeEventListener('click', () => {});
        });
      };
    }
  }, []);
  return (
    <footer className="no-event  absolute bottom-0 w-full flex  justify-between items-center p-4">
      <a data-href={"/"}>
      <div className="gap-1 flex flex-col items-center justify-center">
      <GoHome className="" />
        <p className="text-xs">Home</p>
      </div>
      </a>
      <a data-href={"/leaderboard"}>
      <div className="gap-1 flex flex-col items-center justify-center">
      <FaChartSimple />
        <p className="text-xs">Leaderboard</p>
      </div>
      </a>
      <a data-href={"/friends"}>
      <div className="gap-1 flex flex-col items-center justify-center">
        <HiOutlineUserGroup />
        <p className="text-xs">Friends</p>
      </div>
      </a>
    </footer>
  )
}

export default Footer
