// src/app/page.tsx
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
        <Link href={`/products/${product.id}`}>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default function Home() {
  const products = [
    { 
      id: 1, 
      name: 'MacBook Pro 2022', 
      price: 899, 
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500'
    },
    { 
      id: 2, 
      name: 'Calculus Textbook', 
      price: 45, 
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500'
    },
    { 
      id: 3, 
      name: 'Desk Lamp', 
      price: 25, 
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500'
    }
  ];

  return (
    <main className="min-h-screen">
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
    </main>
  );
}