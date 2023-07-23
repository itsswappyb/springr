import * as React from "react";

import { Card, CardContent, CardTitle } from "./ui/card";
import { Bed, Couch, House, HouseSimple } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "./ui/checkbox";
import Image from "next/image";

type Props = {
  nftCount: number;
};

export function ListingDetailCard(props: Props) {
  const { nftCount } = props;

  return (
    <Card className="w-[900px] h-full border-none rounded-3xl p-6 bg-black flex flex-col justify-end drop-shadow-md">
      {/* Save and exit btn
      <div className="w-full flex justify-end">
        <Button variant="secondary" size="sm" className="border-white border">
          Save and exit
        </Button>
      </div> */}

      {/* Modal title and description */}
      <div className="w-full text-center">
        <CardTitle className="mb-3">View Listing</CardTitle>
      </div>

      <hr className="border-white my-5" />

      <div className="flex items-center flex-col gap-4">
        <h2 className="text-2xl">Joaquim's Place</h2>
        <h2 className="text-2xl font-overpass">Paris, France</h2>
        <Image
          src="/JoaquimListing.png"
          height={350}
          width={350}
          alt="Joaquim listing"
        ></Image>

        {/* Host Details */}
        <div>
          <h2>
            Host: <span className="font-bold">Napolean Bonaparte</span>
          </h2>
          <h2>Vibe Check</h2>
          {/* TO DO: Insert matching NFTs */}
        </div>
      </div>
    </Card>
  );
}
