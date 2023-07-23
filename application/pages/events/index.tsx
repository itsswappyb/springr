import React from "react";
import { EventCard } from "@/components/EventCard";
import events from "@/data/events.json";
import Link from "next/link";

const Events = () => {
  return (
    <div className="p-24">
      <h3 className="text-accent text-center">All Events</h3>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <Link href={`/events/${event.id}`} key={idx}>
              <EventCard event={event} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
