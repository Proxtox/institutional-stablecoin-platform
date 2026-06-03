"use client";

import { useState } from 'react';

export default function InstitutionalStablecoin() {
  const [amount, setAmount] = useState('');

  const handleMint = () => {
    alert(`Minting ${amount} institutional USDC (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Institutional Stablecoin Platform</h1>

      <div className="space-y-4">
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-4 border rounded-2xl" placeholder="Amount to Mint" />
        <button onClick={handleMint} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl text-lg font-semibold">
          Mint Institutional Stablecoin
        </button>
      </div>
    </div>
  );
}