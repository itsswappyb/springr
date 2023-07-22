import {
  DiscordLogo,
  InstagramLogo,
  TelegramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

export function Footer() {
  return (
    <div className="w-full flex items-center justify-center fixed bottom-0 left-0 z-50 shadow-md bg-accent">
      <nav className="flex items-center justify-between w-full max-w-7xl py-3 px-4 border-b-2">
        <div className="flex items-center gap-3 transition duration-150">
          <p>© Springer</p>
          <p>Privacy</p>
          <p>T&C's</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <Link
            href=""
            target="_blank"
            className="text-white hover:text-white transition-colors duration-300"
          >
            <TelegramLogo size={20} />
          </Link>
          <Link
            href=""
            target="_blank"
            className="text-white hover:text-white transition-colors duration-300"
          >
            <DiscordLogo size={20} />
          </Link>

          <Link
            href=""
            target="_blank"
            className="text-white hover:text-white transition-colors duration-300"
          >
            <InstagramLogo size={20} />
          </Link>

          <Link
            href=""
            target="_blank"
            className="text-white hover:text-white transition-colors duration-300"
          >
            <TwitterLogo size={20} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
