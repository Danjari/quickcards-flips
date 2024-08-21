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
    <div className="storyContainer min-w-[400px] ml-10 rounded-lg">
      <FlashcardArray
        cards={cards}
        controls={true}
        showCount={true}
        frontContentStyle={{
          backgroundColor: "#f9fafb",
          color: "#1f2937",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
         
        }}
        backContentStyle={{
          backgroundColor: "#f9fafb",
          color: "#1f2937",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          
        }}
        
      />
    </div>
  );
}
