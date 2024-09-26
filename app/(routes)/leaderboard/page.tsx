"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import WebApp from "@twa-dev/sdk";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

const Leaderboard = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  // Updated colors to use 700 value
  const brightColors = [
    "bg-yellow-700", 
    "bg-green-700", 
    "bg-pink-700", 
    "bg-blue-700", 
    "bg-red-700", 
    "bg-purple-700", 
    "bg-teal-700", 
    "bg-orange-700"
  ];

  const getRandomColor = () => {
    return brightColors[Math.floor(Math.random() * brightColors.length)];
  };

  useEffect(() => {
    if (typeof window !== "undefined" && WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData);
    }
  }, []);

  if (!userData) {
    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">User Data</h1>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <>
      <main className="flex flex-col justify-center items-center p-2">
        <h2 className="text-2xl font-bold py-2">Wall Of Frame</h2>
        <div className="w-full py-4">
          <Card
            bg={getRandomColor()}
            rank="90"
            amount={150}
            username={userData.username || 'N/A'}
          />
        </div>
        <h3 className="place-self-start font-bold text-xl">Top Users</h3>
        <Card rank="#1" amount={160} username="Amardeep" bg={getRandomColor()} />
        <Card rank="#2" amount={140} username="Priya" bg={getRandomColor()} />
        <Card rank="#3" amount={50} username="Shravan" bg={getRandomColor()} />
      </main>
    </>
  );
};

export default Leaderboard;
