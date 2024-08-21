//THIS IS THE ACUTAL DASHBOARD BECAUSE I COULD NOT GET THE OTHER ONE TO WORK SINCE I CANNOT USE CLERK
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { app, db } from "../../firebase";
import {
  doc,
  collection,
  setDoc,
  getFirestore,
  getDocs,
} from "firebase/firestore";
import Link from "next/link";
import Deck from "../components/Deck";
import {useUser} from '@clerk/nextjs';
export default function Dashboard() {
  //just setting the type of the dek
  type Deck = {
    id: string;
  };
 
  const [decks, setDecks] = useState<Deck[]>([]);//store all decks
  const [deck, setDeck] = useState<Deck | null>(null); //store an individual deck
  const [cardsArray, setCardsArray] = useState<any[]>([]);//store the cards for a singular deck
  const [cards, setCards] = useState<
    Array<{ id: number; frontHTML: string; backHTML: string }>
  >([]); //this is the array that goes into Deck.tsx for card rendering
  const [loading, setLoading] = useState(true); //the loading component
  const { user } = useUser(); // Add this line to get the current user

  //this is a function to select a deck upon clicking and then setting the cards
  const selectDeck = (deck: any) => {
    setDeck(deck);
    setCardsArray(deck.cards);
    console.log(`Selected deck: ${deck.id} and cards: ${deck.cards[0].front}`);
    const cards: any = [];
    cardsArray.forEach((card: any) => {
      cards.push({
        id: card.origin,
        frontHTML: card.front,
        backHTML: card.back,
      });
    });
    setCards(cards);
  };
  //this is to load the different decks at the very beginning
  useEffect(() => {
    const getDecks = async () => {
      if (!user) return; // Ensure user is not null or undefined
      //get all documents (the collection is named 'flashcards')
      const querySnapshots = await getDocs(collection(db, "users", user.id, "userFlashcards"));
      //
      const decksData: Deck[] = querySnapshots.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDecks(decksData);
      setLoading(false);
    };

    getDecks();
  }, [user]); // Add user as a dependency to useEffect

  return (
    <div>
      <nav className="flex justify-between p-4 border border-2">
        <div className="text-2xl font-bold">Flips</div>
        <div>This is gonna be the user button</div>
      </nav>
      <div className="flex justify-end">
      
        <Link href="/upload_page"><p className="bg-white text-black font-bold">Create New Flashcards</p></Link>
      
        </div>
      <div className="flex h-screen">
        <div
          className={`border border-2 w-1/3 ${loading ? "flex justify-center items-center" : ""}`}
        >
          {loading ? (
            /* From Uiverse.io by yohohopizza */
            <div className="flex flex-row gap-2">
              <div className="w-4 h-4 rounded-full bg-white animate-bounce"></div>
              <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
            </div>
          ) : (
            <ul>
              {decks.map((deck) => (
                <li key={deck.id} onClick={() => selectDeck(deck)}>
                  <div className="w-full truncate bg-white p-2 text-black border border-2-white hover:bg-zinc-400">
                    {deck.id}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-2/3 border border-2 flex justify-center items-center h-full">
          <div>{deck && <Deck cards={cards} />}</div>
        </div>
      </div>
    </div>
  );
}

