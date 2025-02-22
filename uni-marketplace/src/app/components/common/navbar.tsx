// components/common/Navbar.tsx
export default function Navbar() {
    return (
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">UniMarket</div>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="/products" className="text-gray-700 hover:text-gray-900">Products</a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Sell Item
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }