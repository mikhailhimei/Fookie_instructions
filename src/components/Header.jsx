import React from 'react';

export default function Header() {
  return (
    <header style={{marginBottom:30}} className="header p-4 mb-6 rounded-b-xl bg-gray-900">
      <div style={{display:"flex", justifyContent:"space-between"}} className="max-w-3xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="../../img/kandinsky3.png" width={20} alt="Иконка" className="w-8 h-8" />
          <span className="text-2xl text-white font-bold">Fookie</span>
        </div>
        <div style={{marginRight:30}} className="flex items-center space-x-4">
          {/* Support Button */}
          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-200">
            Поддержать
          </button>
        </div>
      </div>
    </header>
  );
}
