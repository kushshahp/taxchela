// Updated homepage hero section

import React from 'react';

export default function Home() {
  return (
    <div className="h-screen flex flex-col h-full justify-center bg-white text-center flex flex-col items-center justify-center  py-32">
      <h1 className="text-3dl mb-3 font-bold text-gray-800">Simplifying Tax, Law & Finance for Modern India</h1>
      <p className="text-lg text-gray-600 mb-5">Understand the numbers, rules, and insights that shape your financial world – without jargon.</p>
      <a href="/read" className="bg-gray-800 text-white p-2.5 py-2 rounded-full font-medium hover-scale transition">Start Reading</a>
    </div>
  );
}