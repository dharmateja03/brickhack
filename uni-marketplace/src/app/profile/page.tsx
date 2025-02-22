// app/profile/page.tsx
import Link from 'next/link';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Profile Header */}
      <div className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-600">Computer Science • Joined January 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8">
            <button className="py-4 text-blue-600 border-b-2 border-blue-600 font-medium">
              My Listings
            </button>
            <button className="py-4 text-gray-500 hover:text-gray-700">
              Saved Items
            </button>
          </div>
        </div>
      </div>

      {/* User's Products */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example Product Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative pb-[100%]">
              <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
                alt="MacBook Pro"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">MacBook Pro 2022</h3>
              <p className="text-blue-600 font-bold">$899</p>
              <div className="mt-4 flex justify-between">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}