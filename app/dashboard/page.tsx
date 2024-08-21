
"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel } from '@headlessui/react';
import Link from "next/link";
import Deck from "../components/Deck";
import { app, db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';

export default function Dashboard() {
  type Deck = {
    id: string;
    cards: any[]; // Include cards directly in the Deck type
  };

  const [decks, setDecks] = useState<Deck[]>([]);
  const [deck, setDeck] = useState<Deck | null>(null);
  const [cards, setCards] = useState<Array<{ id: number; frontHTML: string; backHTML: string }>>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const selectDeck = (selectedDeck: Deck) => {
    setDeck(selectedDeck);
    const formattedCards = selectedDeck.cards.map((card) => ({
      id: card.origin,
      frontHTML: card.front,
      backHTML: card.back,
    }));
    setCards(formattedCards);
  };

  useEffect(() => {
    const getDecks = async () => {
      if (!user) return;
      const querySnapshots = await getDocs(collection(db, "users", user.id, "userFlashcards"));
      const decksData: Deck[] = querySnapshots.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDecks(decksData);
      setLoading(false);
    };

    getDecks();
  }, [user]);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <nav className="flex justify-between items-center p-4 bg-white opacity-90 border-b border-gray-200 shadow">
          <div className="flex items-center">
            <img src="/logo.svg" alt="logo" className="h-10 w-10 mr-2" />
            <div className="hidden md:block text-2xl font-bold text-indigo-600">Flips</div>
          </div>
          <div className="flex flex-3 items-center justify-between gap-20">
            <div>
                <Link href="/upload_page" className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition">
                Create New Flashcards
                </Link>
            </div>
            <div className="hidden md:flex items-center">
                <UserButton showName={true} />
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          {/* Mobile Sidebar */}
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
              <UserButton showName={false} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 px-4">
                    {decks.map((deck) => (
                      <a
                        key={deck.id}
                        href="#"
                        className="-mx-3 block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition"
                        onClick={() => {
                          selectDeck(deck);
                          setMobileMenuOpen(false);
                        }}
                      >
                        <div className="p-4 bg-indigo-500 text-white rounded hover:bg-indigo-400 transition">
                          {deck.id}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </nav>

        <div className="flex flex-1">
          <div className="hidden lg:block w-1/4 bg-indigo-100 border-r border-indigo-200 h-screen overflow-y-auto">
            <div className="p-4">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {decks.map((deck) => (
                    <li key={deck.id} className="cursor-pointer" onClick={() => selectDeck(deck)}>
                      <div className="p-3 bg-indigo-500 rounded hover:bg-indigo-400 transition">
                        {deck.id}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              
               
            
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center bg-indigo-200 overflow-hidden">
            {deck ? (
              <div className="ml-50">
                <Deck cards={cards} />
              </div>
            ) : (
              <div className="text-gray-500 text-xl">
                Select a deck to view its flashcards
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


