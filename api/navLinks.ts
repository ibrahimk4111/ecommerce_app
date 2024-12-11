import { IoLocationOutline } from "react-icons/io5";
import { Settings, TruckIcon } from "lucide-react";
export const iconOptions = {stroke: "#008ECC", size: 16}

export const topbarNavLinks = [
  {
    id: 1,
    icon: IoLocationOutline,
    text: "Deliver to 423651",
  },
  {
    id: 2,
    icon: TruckIcon,
    text: "Track your order"
  },
  {
    id: 3,
    icon: Settings,
    text: "All Offers"
  }
];
