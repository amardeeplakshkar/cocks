"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "./logo.png";
import Link from "next/link";
import { WebApp } from "@twa-dev/types";

declare global {
  interface Window {
    Telegram?: {
      WebApp: WebApp;
    };
  }
}

interface User {
  telegramId: string;
  points: number;
}

const Page: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();

      // Log the Telegram WebApp object to check its contents
      console.log("Telegram WebApp initialized", tg);

      // Get initDataUnsafe and log it
      const initDataUnsafe = tg.initDataUnsafe || {};
      console.log("initDataUnsafe", initDataUnsafe);

      // Check if user exists in initDataUnsafe
      if (initDataUnsafe.user) {
        // Post user data to your API
        fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(initDataUnsafe.user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              setError(data.error);
            } else {
              setUser(data);
            }
          })
          .catch(() => {
            setError("Failed to fetch user data");
          });
      } else {
        // If no user data is available
        setError("No user data available in initDataUnsafe");
      }
    } else {
      // If Telegram WebApp is not detected
      setError("This app should be opened in Telegram");
    }
  }, []);

  const handleIncreasePoints = async () => {
    if (!user) return;

    try {
      const res = await fetch("/api/increase-points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ telegramId: user.telegramId }),
      });
      const data = await res.json();
      if (data.success) {
        setUser({ ...user, points: data.points });
        setNotification("Points increased successfully!");
        setTimeout(() => setNotification(""), 3000);
      } else {
        setError("Failed to increase points");
      }
    } catch {
      setError("An error occurred while increasing points");
    }
  };

  if (error) {
    return (
      <div className="container mx-auto p-4 text-red-500">{error}</div>
    );
  }

  if (!user) return <div className="container mx-auto p-4">Loading...</div>;

  const preventInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
  };

  return (
    <main className="p-3">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={Logo}
          alt="Community Logo"
          height={150}
          width={150}
          className="no-interaction"
          onContextMenu={preventInteraction}
          onTouchStart={preventInteraction}
          draggable={false}
        />
        <h3 className="text-xl font-bold pb-4">{user.points} COCKS</h3>
        <section className="rounded-lg w-full bg-white/10 p-3">
          <h4 className="uppercase font-bold">Cocks Community</h4>
          <p className="text-white/70 text-sm">Community Of Telegram OGS</p>
          <Link href={"https://t.me/cocks_community"}>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-black font-bold rounded-2xl px-3 py-1 mt-1 text-sm">
              Join
            </button>
          </Link>
        </section>
        <section className="w-full p-3">
          <h3 className="font-bold">Your Rewards</h3>
          <div className="flex flex-col">
            <div className="card flex justify-between items-center w-full py-2">
              <div className="flex justify-center items-center gap-2">
                <span className="h-[2rem] aspect-square bg-white/10 flex justify-center items-center rounded-full">
                  0
                </span>
                <h4 className="text-sm font-bold">Reward</h4>
              </div>
              <p className="font-bold">+X COCKS</p>
            </div>
            <div className="card flex justify-between items-center w-full py-2">
              <div className="flex justify-center items-center gap-2">
                <span className="h-[2rem] aspect-square bg-white/10 flex justify-center items-center rounded-full">
                  0
                </span>
                <h4 className="text-sm font-bold">Reward</h4>
              </div>
              <p onClick={handleIncreasePoints} className="font-bold cursor-pointer">
                +X COCKS
              </p>
              {notification && (
                <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
                  {notification}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
