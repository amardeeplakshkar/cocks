import Card from "@/components/Card";
import Logo from "@/app/logo.png";
import Image from "next/image";

const friends : React.FC = () => {
  const preventInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <main className="flex flex-col justify-center items-center p-2">
        <h2 className="text-2xl font-bold py-2">Invite Friends and <br /> get more $COCKS</h2>
        <Image src={Logo} alt="Cocks Logo" height={250} width={250} onContextMenu={preventInteraction} 
        onTouchStart={preventInteraction}
        draggable={false}   />
        <h3 className="place-self-start font-bold text-xl">Total Friends</h3>
        <Card rank="+685" username="Amardeep" />
        <Card rank="+243" username="Priya" />
        <Card rank="+351" username="Shravan" />
      </main>
    </>
  );
};

export default friends;
