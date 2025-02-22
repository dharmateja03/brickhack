// src/components/products/ProductCard.tsx
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  }
}

export default function ProductCard({ product }: ProductCardProps) {
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