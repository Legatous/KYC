import React, { useState } from 'react';

export default function App() {
  const [selected, setSelected] = useState('selfie');
  const [agreed, setAgreed] = useState(false);

  const options = [
    { type: 'credit', label: 'Credit Card', icon: '💳' },
    { type: 'selfie', label: 'Selfie', icon: '🤳' },
    { type: 'scan', label: 'Scan ID', icon: '🆔' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8 space-y-6">
      <h2 className="text-2xl font-semibold text-white text-center">
        <span className="font-bold">Verify</span> your age in a few{' '}
        <span className="font-bold">easy</span> steps
      </h2>
      <p className="text-gray-300 text-sm">Select a verification method:</p>

      <div className="flex flex-wrap justify-center gap-6">
        {options.map((opt) => (
          <div
            key={opt.type}
            onClick={() => setSelected(opt.type)}
            className={`cursor-pointer flex flex-col items-center px-4 py-3 w-32 border-2 rounded-lg text-sm transition-all
              ${
                selected === opt.type
                  ? 'border-green-400 bg-gray-800'
                  : 'border-gray-600'
              }`}
          >
            <div className="text-3xl mb-2">{opt.icon}</div>
            {opt.label}
          </div>
        ))}
      </div>

      <label className="flex items-center space-x-2 text-sm text-white">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="accent-green-500"
        />
        <span>
          I agree with the{' '}
          <span className="text-green-400 underline cursor-pointer">
            terms and conditions
          </span>
        </span>
      </label>

      <div className="flex items-center space-x-2 text-green-400 text-sm cursor-pointer">
        <span>🧑‍💼</span>
        <span className="underline">
          Already verified? Click here to proceed
        </span>
      </div>

      <button
        disabled={!agreed}
        className={`px-6 py-3 rounded-full font-semibold mt-2 text-sm transition-all
          ${
            agreed
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-gray-600 cursor-not-allowed'
          }`}
      >
        ✅ Start the verification
      </button>

      <div className="text-xs text-center text-gray-400 max-w-md mt-6 space-y-1 px-4">
        <p>
          Don't worry,{' '}
          <span className="text-white font-semibold">we do NOT store</span> any
          images or data.
        </p>
        <p>
          Images are used only to estimate your age. You'll be asked to briefly
          change expressions.
        </p>
        <p>If verification fails, an official photo ID may be required.</p>
      </div>

      
    </div>
  );
}
