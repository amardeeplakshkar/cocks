"use client";
import Image from "next/image";
import React from "react";
import Logo from "./logo.png";
import Link from "next/link";

const Page : React.FC = () => {
  const preventInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <main className="p-3">
        <div className="flex flex-col justify-center items-center">
          <Image src={Logo} alt="Cocks Logo" height={250} width={250} className="no-interaction" onContextMenu={preventInteraction} 
        onTouchStart={preventInteraction}
        draggable={false}   />
          <h3 className="text-xl font-bold pb-4">X COCKS</h3>
          <section className="rounded-lg w-full bg-white/10 p-3">
            <h4 className="uppercase font-bold">cocks community</h4>
            <p className="text-white/70 text-sm">Community Of Telegram OGS</p>
            <Link href={"https://t.me/cocks_community"}>
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  border-0 text-black font-bold rounded-2xl px-3 py-1  mt-1 text-sm">
                Join
              </button>
            </Link>
          </section>
          <section className="w-full p-3">
            <h3 className="font-bold">Your Rewards</h3>
            <div className="flex flex-col">
              <div className="card flex justify-between items-center w-full py-2">
                <div className="flex justify-center items-center gap-2">
                  <span
                    className="h-[2rem] aspect-square
                 bg-white/10  flex justify-center items-center rounded-full"
                  >
                    0
                  </span>
                  <h4 className="text-sm font-bold">Reward</h4>
                </div>
                <p className="font-bold">+X COCKS</p>
              </div>
              <div className="card flex justify-between items-center w-full py-2">
                <div className="flex justify-center items-center gap-2">
                  <span
                    className="h-[2rem] aspect-square
                 bg-white/10  flex justify-center items-center rounded-full"
                  >
                    0
                  </span>
                  <h4 className="text-sm font-bold">Reward</h4>
                </div>
                <p className="font-bold">+X COCKS</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Page;
