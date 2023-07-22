import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowCircleRight } from "@phosphor-icons/react";

export function EventCard() {
  return (
    <Card className="w-[350px] h-[500px] border-none rounded-3xl bg-hero-image bg-cover flex flex-col justify-end drop-shadow-md">
      {/* Card Image */}
      {/* TO DO: Populate background image with event.image props */}

      {/* Card Details */}
      <CardDescription className="flex flex-col w-full p-4 gap-2 rounded-b-3xl bg-secondary-foreground text-black">
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
          <p>JUl 23-24TH</p>
          <ArrowCircleRight size={30} />
        </div>
      </CardDescription>
    </Card>
  );
}

{
  /* <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */
}
