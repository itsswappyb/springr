import * as React from "react";

import { Card } from "./ui/card";
import { ArrowCircleRight } from "@phosphor-icons/react";

export function ListingCard() {
  return (
    <Card className="w-[350px] h-[500px] border-none rounded-3xl bg-hero-image bg-cover flex flex-col justify-end drop-shadow-md">
      {/* Card Image */}
      {/* TO DO: Populate background image with event.image props */}

      {/* Card Details */}
      <div className="flex flex-col w-full p-4 gap-2 rounded-b-3xl bg-secondary-foreground text-black">
        {/* Title */}
        <div className="flex justify-between align-middle">
          <h2 className="text-2xl">Stay with Vitalik</h2>
        </div>
        {/* Date */}
        <p className="font-overpass uppercase">jul 23-24TH</p>
        {/* Location and Event */}
        <div className="flex justify-between items-center text-md font-overpass">
          <div className="uppercase bg-black text-white rounded-3xl px-4 py-1">
            paris, france
          </div>
          <div className="uppercase border rounded-3xl border-black px-2 py-1">
            eth paris
          </div>
          <ArrowCircleRight size={30} />
        </div>
      </div>
    </Card>
  );
}
