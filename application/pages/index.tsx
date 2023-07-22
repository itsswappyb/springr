import type { NextPage } from "next";
import WalletConnection from "@/components/demo/WalletConnection";
import UserAuthentication from "@/components/demo/UserAuthentication";
import DecentralizedStorage from "@/components/demo/DecentralizedStorage";
import ContractInteraction from "@/components/demo/ContractInteraction";
import { EventCard } from "../components/EventCard";
import { Button } from "@/components/ui/button";
import { set } from "zod";

const tabs = [
  { name: "Wallet Connection", component: <WalletConnection /> },
  { name: "Contract Interaction", component: <ContractInteraction /> },
  { name: "User Authentication", component: <UserAuthentication /> },
  { name: "Decentralized Storage", component: <DecentralizedStorage /> },
];

const Home: NextPage = () => {
  return (
    <div className="w-full x-auto pr-9 pl-9 relative mt-20 pb-24">
      <div className="bg-hero-image h-160 bg-cover justify-center items-center flex-col flex bg-center gap-3 rounded-full">
        <h1 className="text-6xl leading-11 text-center">
          Airbnb for the <br />
          vibe economy{" "}
        </h1>
        <h4>Find places to stay with like-minded people.</h4>
        <Button variant="secondary">Start Browsing</Button>
      </div>

      <EventCard />
    </div>
  );
};

export default Home;
