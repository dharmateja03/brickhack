// src/app/products/[id]/page.tsx
"use client";

import { useState , use } from 'react';


export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isReportModalOpen, setReportModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const products = {
    '1': {
      id: 1,
      name: 'MacBook Pro 2022',
      price: 899,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500',
      description: 'MacBook Pro 2022, excellent condition. Used for one semester only. Includes charger and original box.',
      seller: {
        name: 'John Doe',
        department: 'Computer Science',
        joinDate: 'January 2024'
      }
    },
    '2': {
      id: 2,
      name: 'Calculus Textbook',
      price: 45,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500',
      description: 'Calculus Early Transcendentals 8th Edition. Highlights inside but good condition overall.',
      seller: {
        name: 'Sarah Wilson',
        department: 'Mathematics',
        joinDate: 'December 2023'
      }
    },
    '3': {
      id: 3,
      name: 'Desk Lamp',
      price: 25,
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500',
      description: 'LED desk lamp with adjustable brightness and color temperature. Perfect for late night studying.',
      seller: {
        name: 'Mike Brown',
        department: 'Engineering',
        joinDate: 'February 2024'
      }
    }
  };

  // Get product based on ID
  const product = products[productId as keyof typeof products];

  // Show error if product not found
  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
          <p className="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
          <a href="/" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out ${product.name} on UniMarket`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <img 
                src={product.image}
                alt={product.name}
                className="rounded-lg object-cover w-full max-w-lg"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex gap-2">
                  <button 
                    onClick={handleShare}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                  >
                    Share
                  </button>
                  <button 
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded ${isFavorite ? 'text-red-500' : ''}`}
                  >
                    {isFavorite ? 'Saved' : 'Save'}
                  </button>
                </div>
              </div>

              <p className="text-2xl text-blue-600">${product.price}</p>
              <p className="text-gray-600">{product.description}</p>

              <div className="border-t pt-4">
                <h2 className="font-semibold">Seller Information</h2>
                <p>{product.seller.name}</p>
                <p>{product.seller.department}</p>
                <p>Member since {product.seller.joinDate}</p>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setContactModalOpen(true)}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >
                  Contact Seller
                </button>
                <button 
                  onClick={() => setReportModalOpen(true)}
                  className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Contact Seller</h2>
              <button 
                onClick={() => setContactModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Hi, I'm interested in your item..."
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Report Modal */}
      {isReportModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Report Item</h2>
              <button 
                onClick={() => setReportModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for reporting
                </label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>Inappropriate content</option>
                  <option>Suspicious listing</option>
                  <option>Incorrect information</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional details
                </label>
                <textarea
                  rows={4}
                  placeholder="Please provide more information..."
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
              >
                Submit Report
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}