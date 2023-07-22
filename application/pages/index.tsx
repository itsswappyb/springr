import type { NextPage } from "next";
import { useState } from "react";
import WalletConnection from "@/components/demo/WalletConnection";
import UserAuthentication from "@/components/demo/UserAuthentication";
import DecentralizedStorage from "@/components/demo/DecentralizedStorage";
import ContractInteraction from "@/components/demo/ContractInteraction";
import { EventCard } from "../components/EventCard";

const tabs = [
  { name: "Wallet Connection", component: <WalletConnection /> },
  { name: "Contract Interaction", component: <ContractInteraction /> },
  { name: "User Authentication", component: <UserAuthentication /> },
  { name: "Decentralized Storage", component: <DecentralizedStorage /> },
];

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(tabs[0]);

  return (
    <div className="w-full x-auto pr-9 pl-9 relative mt-24">
      <div className="bg-hero-image h-160 bg-cover flex-col flex bg-center rounded-full">
        <h1>Airbnb for the vibe economy</h1>
      </div>
    </div>
  );
};

export default Home;
