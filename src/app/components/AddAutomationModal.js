'use client';
import { useEffect, useState } from 'react';
import Modal from './Modal';

export default function AddAutomationModal({ onClose, onComplete }) {
  const [automationName, setAutomationName] = useState('');
  const [project, setProject] = useState('');
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const handleNext = () => {
    if (!automationName.trim() || !project) {
      setError(true);
      return;
    }

    onClose();
    onComplete({automationName});
  };

  return (
    <Modal onClose={onClose} modalTitle={"Add Automation"}>

      <input
        type="text"
        placeholder="Automation Name"
        value={automationName}
        onChange={e => setAutomationName(e.target.value)}
        className={`bg-white text-black w-full border px-3 py-2 rounded mb-2 ${error && !automationName ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && !automationName && <p className="text-red-500 text-sm mb-2">Please fill required fields</p>}

      <select
        value={project}
        onChange={e => setProject(e.target.value)}
        className={`w-full border px-3 py-2 rounded mb-2 ${error && !project ? 'border-red-500' : 'border-gray-300'}`}
      >
        <option value="">Select Project</option>
        {projects.map(p => (
          <option key={p.id} value={p.name}>{p.name}</option>
        ))}
      </select>
      {error && !project && <p className="text-red-500 text-sm mb-2">Please fill required fields</p>}

      <div className="flex justify-end mt-4">
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </Modal>
  );
}
