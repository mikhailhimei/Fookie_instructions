import React from 'react';

export default function AccordionSection({ title, content, isOpen, onClick }) {
  return (
    <div className="accordion-item">
      <button
        onClick={onClick}
        className="w-full p-4 bg-gray-100 text-left rounded-lg flex justify-between items-center border border-gray-200 hover:bg-gray-200 transition duration-300"
      >
        <span>{title}</span>
        <div
          className={`transform transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="p-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
          {content}
        </div>
      )}
    </div>
  );
}
