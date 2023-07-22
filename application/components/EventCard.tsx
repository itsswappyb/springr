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

export function EventCard() {
  return (
    <Card className="w-[350px] h-[500px] rounded-3xl bg-hero-image bg-cover">
      {/* Card Image */}
      {/* TO DO: Populate background image with event.image props */}
      <div className="b h-96  rounded-t-3xl"></div>
      {/* Card Details */}
      <CardDescription className="flex flex-col w-full">
        {/* Title and Flag */}
        <div className="flex justify-between px-4">
          <h2>ETH Global Paris</h2>
          <p>🇫🇷</p>
        </div>
        {/* Event type, date and icon */}
        <div className="flex justify-between px-4">
          <div className="text-uppercase">Hackathon</div>
          <p>JUl 23-24TH</p>
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
