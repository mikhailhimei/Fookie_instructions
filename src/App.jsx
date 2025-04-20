import React, { useState } from 'react';
import Header from './components/Header';
import Accordion from './components/Accordion';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans p-6 max-w-3xl mx-auto">
      <Header />
      <Accordion />
    </div>
  );
}
