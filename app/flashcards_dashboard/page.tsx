//this is the page where the user can come and see all the flashcards they have ever built
'use client';
import React, { useState } from 'react';
import {useRouter} from 'next/navigation'

export default function Dashboard() {
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);


  const handleCardClick = (id: any) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));  
  };
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
}