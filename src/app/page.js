'use client';
import { useState } from 'react';
import AddAutomationModal from './components/AddAutomationModal';
import StartAutomationModal from './components/StartAutomationModal';

export default function HomePage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showStartModal, setShowStartModal] = useState(false);

  const handleAddComplete = () => {
    setShowAddModal(false);
    setShowStartModal(true);
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <button
        onClick={() => setShowAddModal(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded shadow"
      >
        Add Automation
      </button>

      {showAddModal && (
        <AddAutomationModal
          onClose={() => setShowAddModal(false)}
          onComplete={handleAddComplete}
        />
      )}

      {showStartModal && (
        <StartAutomationModal
          onClose={() => setShowStartModal(false)}
        />
      )}
    </main>
  );
}
