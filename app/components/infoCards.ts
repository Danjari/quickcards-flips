// app/components/infoCards.ts

import { AlarmClockOff, LucideIcon, ArrowDownNarrowWide, ArrowUpNarrowWide, } from "lucide-react";

interface IIinfoCards{
    icon: LucideIcon;
    title: string;
    bodyText: string;
    id: number;
}

 const InfoCards: IIinfoCards[] = [
    {
        icon: AlarmClockOff,
        title: "Stop Wasting Time",
        bodyText: "wkjghawgijnaepigjnaepirgjnaeprn",
        id: 1,
    },
    {
        icon: ArrowDownNarrowWide,
        title: "aeogjapgn",
        bodyText: "oegjaeporgjapegjnvakjrgnapeiogj[WOGIJAEPRJGNAE",
        id: 2,
    },
    {
        icon: ArrowUpNarrowWide,
        title: "aeogjapgn",
        bodyText: "oegjaeporgjapegjnvakjrgnapeiogj[WOGIJAEPRJGNAE",
        id: 3,
    }

]

export default InfoCards;