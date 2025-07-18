'use client';
import { useState } from 'react';
import Modal from './Modal';

export default function WaitConditionModal({ onClose }) {
  const [selectedMode, setSelectedMode] = useState('time');
  const [timeValue, setTimeValue] = useState('');
  const [timeUnit, setTimeUnit] = useState('minutes');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const renderTimeInputs = () => (
    <div className="space-y-2">
      <input
        type="number"
        value={timeValue}
        onChange={e => setTimeValue(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        placeholder="Enter time value"
      />
      <select
        value={timeUnit}
        onChange={e => setTimeUnit(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      >
        <option value="minutes">Minutes</option>
        <option value="hours">Hours</option>
        <option value="days">Days</option>
        <option value="weeks">Weeks</option>
        <option value="months">Months</option>
        <option value="years">Years</option>
      </select>
    </div>
  );

  const renderDateInputs = () => (
    <div className="space-y-2">
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="time"
        value={time}
        onChange={e => setTime(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
    </div>
  );

  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">Set Wait Condition</h2>

      <div className="space-y-4">
        <div>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="waitMode"
              value="time"
              checked={selectedMode === 'time'}
              onChange={() => setSelectedMode('time')}
            />
            For a Specific Amount of Time
          </label>
          {selectedMode === 'time' && renderTimeInputs()}
        </div>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="waitMode"
              value="date"
              checked={selectedMode === 'date'}
              onChange={() => setSelectedMode('date')}
            />
            Until a Specific Date & Time
          </label>
          {selectedMode === 'date' && renderDateInputs()}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Done
        </button>
      </div>
    </Modal>
  );
}
