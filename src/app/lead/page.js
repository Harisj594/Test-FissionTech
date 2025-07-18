'use client';
import { useState } from 'react';
import WaitConditionModal from '../components/WaitConditionModal';

export default function LeadPage() {
  const [showMenu, setShowMenu] = useState(false);
  const [showWaitModal, setShowWaitModal] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lead Created</h1>

      <button
        onClick={() => setShowMenu(prev => !prev)}
        className="text-2xl bg-white text-black bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
      >
        +
      </button>

      {showMenu && (
        <div className="mt-2 border rounded shadow bg-white w-40">
          <div
            className="cursor-pointer text-black px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              setShowWaitModal(true);
              setShowMenu(false);
            }}
          >
            Wait
          </div>
          <div className="cursor-pointer text-black px-4 py-2 hover:bg-gray-100">
            If/Else
          </div>
        </div>
      )}

      {showWaitModal && (
        <WaitConditionModal onClose={() => setShowWaitModal(false)} />
      )}
    </div>
  );
}
