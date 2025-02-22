// app/page.tsx
// import ProductCard from 'products /ProductCard.tsx';
import Link from 'next/link';
interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  }
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">${product.price}</p>
        <a href={`/products/${product.id}`}>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </a>
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-4">Campus Marketplace</h1>
          <p className="text-xl mb-8">Buy, sell, and trade with your fellow students</p>
          <Link href="/products">
  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
    Start Browsing
  </button>
</Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.count} items</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// Sample data (you can move this to a separate file later)
const categories = [
  { name: 'Textbooks', count: 150 },
  { name: 'Electronics', count: 89 },
  { name: 'Furniture', count: 45 },
  
  {name: 'Relets', count: 4}
];

const products = [
  { 
    id: 1, 
    name: 'MacBook Pro 2022', 
    price: 899, 
    // Using a real image URL
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500' 
  },
  { 
    id: 2, 
    name: 'Calculus Textbook', 
    price: 45, 
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500' 
  },
  { 
    id: 3, 
    name: 'Desk Lamp', 
    price: 25, 
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500' 
  },
];;

const steps = [
  {
    number: '1',
    title: 'Create Account',
    description: 'Sign up with your university email to get started',
  },
  {
    number: '2',
    title: 'Post or Browse',
    description: 'List your items or browse what others are selling',
  },
  {
    number: '3',
    title: 'Connect & Trade',
    description: 'Meet on campus and complete your transaction',
  },
];