import type { NextPage } from "next";
import { ListPlaceModal } from "@/components/ListPlaceModal";

const Events: NextPage = () => {
  return (
    <div className=" x-auto pr-9 pl-9 relative mt-20 pb-24">
      <ListPlaceModal />
    </div>
  );
};

export default Events;
