import { Bed } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ConnectWallet } from "@thirdweb-dev/react";
import { buttonVariants } from "./ui/button";
import { useRouter } from "next/router";
import { use } from "react";

export function Nav() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-between fixed top-0 left-0 z-50">
      <nav className="flex items-center justify-between w-full py-5 x-auto pr-9 pl-9">
        <div className="flex items-center gap-3 transition duration-150">
          <Link href="/" className="flex items-center gap-3 text-accent">
            <Bed className="text-white" color="#7593D9" size={32} />
            <h1 className="font-josefin text-xl ">Springer</h1>
          </Link>
        </div>

        <div className="gap-4 flex">
          {/* TODO: change to Links */}
          <Button
            variant="default"
            size="sm"
            onClick={() => router.push("/events")}
          >
            Events
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => router.push("/listings")}
          >
            Listings
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => router.push("/bookings")}
          >
            Bookings
          </Button>
        </div>

        <ConnectWallet
          className="bg-accent-foreground text-white hover:scale-110 duration-75"
          theme="light"
        />
      </nav>
    </div>
  );
}
