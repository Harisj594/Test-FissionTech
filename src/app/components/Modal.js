"use client";

export default function Modal({ children, onClose, modalTitle }) {
  return (
    <div className="fixed inset-0 bg-black-opacity-80 z-50 flex items-center justify-center">
      <div className="bg-white rounded shadow-lg p-6 w-auto max-w-xl relative text-gray-800">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✖
        </button>
        <h2 className="text-lg font-semibold mb-4">{modalTitle}</h2>

        {children}
      </div>
    </div>
  );
}
