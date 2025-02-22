// src/app/products/page.tsx
import Link from 'next/link';

export default function BrowseProducts() {
  // Using the same products data for now
  const products = [
    { 
      id: 1, 
      name: 'MacBook Pro 2022', 
      price: 899,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500',
      seller: 'John Doe',
      postedAt: '2 hours ago'
    },
    { 
      id: 2, 
      name: 'Calculus Textbook', 
      price: 45,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500',
      seller: 'Sarah Wilson',
      postedAt: '5 hours ago'
    },
    { 
      id: 3, 
      name: 'Desk Lamp', 
      price: 25,
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500',
      seller: 'Mike Brown',
      postedAt: '1 day ago'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-xl text-blue-600">
              UniMarket
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Post Item
            </button>
          </div>
        </div>
      </nav>

      {/* Search and Filters Section */}
      <div className="pt-20 pb-6 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search items..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>Textbooks</option>
              <option>Electronics</option>
              <option>Furniture</option>
            </select>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sort By</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Product Image */}
              <div className="relative pb-[100%]">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-lg font-bold text-blue-600">${product.price}</p>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <p>{product.seller}</p>
                  <p>{product.postedAt}</p>
                </div>

                <Link href={`/products/${product.id}`}>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="max-w-6xl mx-auto px-4 pb-8 text-center">
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
}