import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ activeTab }) {
  const navItems = [
    { name: 'home', path: '/' },
    { name: 'lectures', path: '/lectures' },
    { name: 'labs', path: '/labs' },
    { name: 'lab system', path: '/LabSystem' },
    { name: 'keynotes', path: '/keynotes' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            {/* Using direct absolute path to avoid Vite hashing issues for the logo */}
            <img src="/4c16/assets/tcd-logo.png" alt="Trinity College Dublin" className="h-14 w-auto object-contain" />
            <div className="hidden sm:flex flex-col border-l border-gray-300 pl-4 py-1 h-10 justify-center">
                <span className="font-bold text-xl text-gray-600 leading-none tracking-tight">EEU44C16/EE5C16</span>                
            </div>
          </div>
          <nav className="flex space-x-1 md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === item.name
                    ? 'text-tcd-blue bg-blue-50'
                    : 'text-gray-600 hover:text-tcd-blue hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
