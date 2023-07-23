import React from "react";
import { useRouter } from "next/router";
import events from "@/data/events.json";
import Image from "next/image";

const EventDetail = () => {
  // get query params
  const router = useRouter();
  const { eventId } = router.query;

  const event = events.find((event) => event.id.toString() === eventId);

  return (
    <div className="p-24">
      <h1 className="text-2xl font-medium text-accent">Event</h1>
      <p className="mt-9 text-2xl font-semibold text-primary-foreground/90">
        {event?.name}
      </p>
      <div className="flex items-center gap-3">
        <p className="text-sm text-primary-foreground/60">{event?.date}</p>
        <p className="text-sm text-primary-foreground/50 ml-4 uppercase">
          {event?.location}
        </p>
      </div>
      <p className="mt-3 uppercase text-xs px-3 py-2 border border-solid rounded-lg flex justify-center max-w-[90px] text-primary-foreground/60">
        {event?.type}
      </p>

      <div className="mt-9 flex justify-between">
        <div className="bg-white rounded-2xl py-3 px-6 max-w-2xl">
          <p className="mt-9 text-xl font-semibold text-primary-foreground/90">
            About
          </p>
          <p className="mt-9 text-xl font-medium text-primary-foreground/90">
            {event?.description}
          </p>
        </div>
        {event?.image && (
          <div>
            <Image src={event.image} alt="event" width={400} height={300} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
