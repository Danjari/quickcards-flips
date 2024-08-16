interface IPricingCards {
    title: string;
    price: number;
    features: string[];
    id: number;
    oneliner:string
}

const PricingCards: IPricingCards[] =  [
    {
        title: "Basic",
        price: 100,
        features: ["100 tests", "100 positive tests", "100 negative tests"],
        id: 1,
        oneliner:"aieguhqpaiguapeig",
    },
    {
        title: "Pro",
        price: 200,
        features: ["200 tests", "200 positive tests", "200 negative tests"],
        id: 2,
        oneliner:"egawjengpqiguhqa"
    },
    {
        title: "Enterprise",
        price: 300,
        features: ["300 tests", "300 positive tests", "300 negative tests"],
        id: 3,
        oneliner:"epiuqhagpiaeurgqpaiurgnqpaieg"
    },
]

export default PricingCards;