'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from './Modal';

export default function StartAutomationModal({ onClose }) {
  const tabs = ['Lead Trigger', 'Email Trigger', 'Webhook'];
  const [activeTab, setActiveTab] = useState('Lead Trigger');
  const router = useRouter();

  const renderLeadTrigger = () => (
    <div className="space-y-2">
      <button
        onClick={() => router.push('/lead')}
        className="w-full text-left px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
      >
        New Lead
      </button>
      <div className="w-full px-3 py-2 bg-gray-100 rounded">Lead Update</div>
      <div className="w-full px-3 py-2 bg-gray-100 rounded">On a Specific Date</div>
    </div>
  );

  const renderContent = () => {
    if (activeTab === 'Lead Trigger') return renderLeadTrigger();
    return <p className="text-sm text-gray-600">Content for the selected tab will be updated later.</p>;
  };

  return (
    <Modal onClose={onClose}>
      <div className="flex w-[500px] gap-4">
        {/* Tabs */}
        <div className="w-1/3 space-y-2 border-r pr-2">
          {tabs.map(tab => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-3 py-2 rounded ${
                activeTab === tab ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="w-2/3">{renderContent()}</div>
      </div>
    </Modal>
  );
}
