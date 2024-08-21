
import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon, ClockIcon } from "@heroicons/react/24/outline";

interface IInfoCard {
    icon: React.ComponentType<any>;
    title: string;
    bodyText: string;
    id: number;
}

const InfoCards: IInfoCard[] = [
    {
        icon: CloudArrowUpIcon,
        title: "Step1: Upload your PDF",
        bodyText: "Flips will automatically create flashcards from you, letting you focus on what really matters.",
        id: 1,
    },
    {
        icon: LockClosedIcon,
        title: "Step 2: Practice",
        bodyText: "Study at your own pace, track your progress, and revisit the areas where you need the most improvement. Being organized has never been easier.",
        id: 2,
    },
    {
        icon: ArrowPathIcon,
        title: "Step 3: Review & Repeat",
        bodyText: "You know already but consistency is key! Flips makes it easy to revisit and review your flashcards regularly. ",
        id: 3,
    },
    {
        icon: ClockIcon,
        title: "Save Yourself Hours and Ace Your Exams",
        bodyText: "Spend less time preparing and more time mastering your material, so you can walk into every exam with confidence and crush it.",
        id: 4,
    },
];

export default InfoCards;
