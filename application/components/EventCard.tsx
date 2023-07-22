import * as React from "react";

import { Card, CardDescription } from "./ui/card";
import { ArrowCircleRight } from "@phosphor-icons/react";

export function EventCard() {
  return (
    <Card className="w-[350px] h-[500px] border-none rounded-3xl bg-hero-image bg-cover flex flex-col justify-end drop-shadow-md">
      {/* Card Image */}
      {/* TO DO: Populate background image with event.image props */}

      {/* Card Details */}
      <div className="flex flex-col w-full p-4 gap-2 rounded-b-3xl bg-secondary-foreground text-black">
        {/* Title and Flag */}
        <div className="flex justify-between align-middle">
          <h2 className="text-2xl">ETH Global Paris</h2>
          <p>🇫🇷</p>
        </div>
        {/* Event type, date and icon */}
        <div className="flex justify-between items-center text-md font-overpass">
          <div className="uppercase border rounded-3xl border-black px-2 py-1">
            Hackathon
          </div>
          <div>
            <p>JUl 23-24TH</p>
          </div>
          <ArrowCircleRight size={30} />
        </div>
      </div>
    </Card>
  );
}
