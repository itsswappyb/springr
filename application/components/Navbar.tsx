import { Bed } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ConnectWallet } from "@thirdweb-dev/react";

export function Nav() {
  return (
    <div className="w-full flex justify-between fixed top-0 left-0 z-50">
      <nav className="flex items-center justify-between w-full max-w-7xl py-5 x-auto pr-9 pl-9">
        <div className="flex items-center gap-3 transition duration-150">
          <Link href="/" className="flex items-center gap-3 text-accent">
            <Bed className="text-white" color="#7593D9" size={32} />
            <h1 className="font-josefin text-xl ">Springer</h1>
          </Link>
        </div>

        <div className="gap-4 flex">
          <Button variant="default" size="sm">
            Events
          </Button>
          <Button variant="default" size="sm">
            Your Bookings
          </Button>
          <Button variant="default" size="sm">
            Your Bookings
          </Button>
        </div>

        <ConnectWallet />
      </nav>
    </div>
  );
}
