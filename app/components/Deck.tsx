"use client";

import { useState, useEffect, useRef } from "react";
import { FlashcardArray } from "react-quizlet-flashcard";

// Define the Card interface with the correct property name
interface Card {
  id: number;
  frontHTML: string;
  backHTML: string;
}

// Define the props interface
interface DeckProps {
  cards: Card[];
}

// Correctly declare and export the Deck component
export default function Deck({ cards }: DeckProps) {
  return (
    <div className="storyContainer w-full">
      <FlashcardArray
        cards={cards}
        controls={true}
        showCount={true}
        frontContentStyle={{
          backgroundColor: "white",
          color: "yellow",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
        backContentStyle={{
          backgroundColor: "white",
          color: "black",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      />
    </div>
  );
}
