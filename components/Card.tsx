import React from "react";
type CardProps = {
  username?: string;
  amount?: number;
  rank: string;
  bg?: string;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Card = ({ username = "Cocks User", amount, rank, bg }: CardProps) => {
  const randomColor = getRandomColor();
  return (
    <div
      className={`card flex justify-between items-center w-full p-2  rounded-lg m-1 ${bg}`}
    >
      <div className="flex justify-center items-center gap-2">
        <span
          className="h-[3rem] text-black font-bold aspect-square flex justify-center items-center rounded-full uppercase"
          style={{ backgroundColor: `${randomColor}` }}
        >
          {username.slice(0, 2)}
        </span>
        <div>
          <h4 className="text-sm font-bold">{username}</h4>
          {amount !== undefined && (
            <h4 className="text-white/30 text-sm font-bold">{`${amount} COCKS`}</h4>
          )}
        </div>
      </div>
      <p className="font-bold">{rank}</p>
    </div>
  );
};

export default Card;
