import { Bed } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "../@/components/ui/button";

export function Nav() {
  return (
    <div className="w-full flex items-center justify-center fixed top-0 left-0 z-50">
      <nav className="flex items-center justify-between w-full max-w-7xl py-5 px-4">
        <div className="flex items-center gap-3 transition duration-150">
          <Link href="/" className="flex items-center gap-3 text-accent">
            <Bed className="text-white" color="#7593D9" size={32} />
            <h1 className="font-josefin text-xl ">Springer</h1>
          </Link>
        </div>

        <div>
          <Button variant="default" size="sm">
            Event
          </Button>
        </div>

        <div className="flex gap-4 items-center"></div>
      </nav>
    </div>
  );
}
