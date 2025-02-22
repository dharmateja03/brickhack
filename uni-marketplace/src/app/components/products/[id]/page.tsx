// src/app/products/[id]/page.tsx
export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = {
    id: params.id,
    name: 'MacBook Pro 2022',
    price: 899,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    description: 'Excellent condition, used for one semester',
    seller: {
      name: 'John Doe',
      department: 'Computer Science'
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="flex items-center justify-center">
            <img 
              src={product.image}
              alt={product.name}
              className="rounded-lg object-cover w-full max-w-lg"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl text-blue-600">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            <div className="border-t pt-4">
              <h2 className="font-semibold">Seller Information</h2>
              <p>{product.seller.name}</p>
              <p>{product.seller.department}</p>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}