// components/common/Navbar.tsx
"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-blue-600">
            UniMarket
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/post-item">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Post Item
              </button>
            </Link>
            
            {/* User Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                  <Link href="/profile">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Profile
                    </div>
                  </Link>
                  <Link href="/settings">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Settings
                    </div>
                  </Link>
                  <div className="border-t border-gray-100">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">
                      Logout
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}