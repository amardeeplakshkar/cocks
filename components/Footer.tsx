"use client";
import React, { useEffect } from 'react'
import { FaChartSimple } from 'react-icons/fa6'
import { GoHome } from 'react-icons/go'
import { HiOutlineUserGroup } from 'react-icons/hi'

const Footer: React.FC = () => {
  useEffect(() => {
    // Only run the DOM manipulation on the client side
    if (typeof window !== 'undefined') {
      const links = document.querySelectorAll('[data-href]');

      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = (link as HTMLElement).getAttribute('data-href');
          if (href) {
            window.open(href, '_self'); // Opens the link in the same tab
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
    <footer className="absolute bottom-0 w-full flex justify-between items-center p-4">
      <div data-href="/" className="gap-1 flex flex-col items-center justify-center cursor-pointer">
        <GoHome />
        <p className="text-xs">Home</p>
      </div>

      <div data-href="/leaderboard" className="gap-1 flex flex-col items-center justify-center cursor-pointer">
        <FaChartSimple />
        <p className="text-xs">Leaderboard</p>
      </div>

      <div data-href="/friends" className="gap-1 flex flex-col items-center justify-center cursor-pointer">
        <HiOutlineUserGroup />
        <p className="text-xs">Friends</p>
      </div>
    </footer>
  );
}

export default Footer;
