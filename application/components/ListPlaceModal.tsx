import * as React from "react";

import { Card, CardContent, CardTitle } from "./ui/card";
import { Bed, Couch, House, HouseSimple } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "./ui/checkbox";

export function ListPlaceModal() {
  return (
    <Card className="w-[900px] h-full border-none rounded-3xl p-6 bg-black flex flex-col justify-end drop-shadow-md">
      {/* Save and exit btn */}
      {/* <div className="w-full flex justify-end">
        <Button variant="secondary" size="sm" className="border-white border">
          Save and exit
        </Button>
      </div> */}

      {/* Modal title and description */}
      <div className="w-full flex flex-col">
        <CardTitle className="mb-3">List your place</CardTitle>
        <CardTitle className="font-normal text-md mb-9">
          Fill in the following details to list your place and become a host.
        </CardTitle>
      </div>

      {/* TO DO: Create schema and change to form later */}
      <div className="font-overpass gap-4 flex-col flex">
        <CardHeader>Type of Accommodation:</CardHeader>
        {/* Types of accomodation - select */}
        <div className="w-full flex justify-between mb-5">
          <Button
            variant="secondary"
            className="border p-4 w-1/4 mr-6 h-[75px] border-white"
          >
            <Bed size={24} className="mr-2" />
            <h4>Bedroom</h4>
          </Button>

          <Button
            variant="secondary"
            className="border w-1/4 mr-6 h-[75px] border-white"
          >
            <House size={24} className="mr-2" />
            <h4>Entire Place</h4>
          </Button>

          <Button
            variant="secondary"
            className="border h-[75px] w-1/4 mr-6 border-white"
          >
            <HouseSimple size={24} className="mr-2" />
            <h4>Shared Room</h4>
          </Button>

          <Button
            variant="secondary"
            className="border h-[75px] h-[75px] w-1/4 border-white"
          >
            <Couch size={24} className="mr-2" />
            <h4>Couch</h4>
          </Button>
        </div>
        <CardHeader className="font-bold">Location:</CardHeader>
        <CardContent>
          Only shared with guest after reservation has been confirmed.
        </CardContent>
        <Input type="address" placeholder="Full address" />
        {/* Upload cover photo */}
        <Label htmlFor="picture">Cover photo:</Label>
        <Input id="picture" type="file" />
        {/* Upload more */}
        <Label htmlFor="picture">Upload 3-5 more photos:</Label>
        <Input id="picture" type="file" className="mb-5" />

        {/* Amenities */}
        <CardHeader>Amenities</CardHeader>
        <div className="w-full flex mb-5">
          <div className="w-1/2 gap-2 flex flex-col text-white">
            <div>
              <Checkbox id="wifi" className="mr-3" />
              <Label htmlFor="wifi">Wifi</Label>
            </div>

            <div>
              <Checkbox id="washer" className="mr-3" />
              <Label htmlFor="washer">Washer</Label>
            </div>

            <div>
              <Checkbox id="dryer" className="mr-3" />
              <Label htmlFor="dryer">Dryer</Label>
            </div>
          </div>
          <div className="w-1/2 gap-2 flex flex-col">
            <div>
              <Checkbox id="parking" className="mr-3" />
              <Label htmlFor="parking">Free Parking</Label>
            </div>
            <div>
              <Checkbox id="workspace" className="mr-3" />
              <Label htmlFor="workspace">Dedicated Workspace</Label>
            </div>

            <div>
              <Checkbox id="tv" className="mr-3" />
              <Label htmlFor="tv">TV</Label>
            </div>
          </div>
        </div>

        {/* Title and description */}
        <CardHeader>Give your listing a title and description</CardHeader>
        <Input type="text" placeholder="Title" />
        <Input type="textarea" className="mb-4" placeholder="Description" />

        {/* Price */}
        <CardHeader>Price</CardHeader>
        <div>
          <Button
            variant="secondary"
            className="border p-4 w-[120px] mr-4 border-white"
          >
            <h4>Free</h4>
          </Button>
          <Button
            variant="secondary"
            className="border p-4 w-[120px] border-white"
          >
            <h4>Paid</h4>
          </Button>
        </div>

        {/* Set Price (in ETH) */}
        <CardHeader>Price in ETH</CardHeader>
        <Input type="number" placeholder="0ETH" className="mb-4"></Input>

        <Button variant="default" className="w-1/4">
          Submit
        </Button>
      </div>
    </Card>
  );
}
