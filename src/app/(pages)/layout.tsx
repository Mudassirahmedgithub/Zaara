'use client';
import { useState } from 'react';
import LovePopup from '../../components/LovePopup';
import HomePage from '../(pages)/page';
import '../globals.css';

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <LovePopup onConfirmed={() => setEntered(true)} />}
      <HomePage />
    </>
  );
}
