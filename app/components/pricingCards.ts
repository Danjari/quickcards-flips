interface IPricingCards {
    title: string;
    price: number;
    features: string[];
    id: number;
    oneliner:string;
    link:string
}

const PricingCards: IPricingCards[] =  [
    {
        title: "Basic",
        price: 0,
        features: ["10 Cards per week","Gpt-3", "5 Pdfs Downloads"],
        id: 1,
        oneliner:"Great for beginners",
        link:"/login"
    },
    {
        title: "Premium",
        price: 29.99,
        features: ["Unlimited Flashcards", "Gpt-4o", "Unlimited Pdf Downloads", "24/7 Support","Invite to community Events"],
        id: 2,
        oneliner:"Best for students",
        link:"/stripe"
    },
]

export default PricingCards;