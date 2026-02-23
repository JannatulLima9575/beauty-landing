import { Product } from "../types/product";

const products: Product[] = [
  {
    id: 1,
    title: "Sun Creams",
    description: "It is a long established fact that a reader will be distracted.",
  },
  {
    id: 2,
    title: "Anti-Aging Creams",
    description: "It is a long established fact that a reader will be distracted.",
  },
  {
    id: 3,
    title: "Night Creams",
    description: "It is a long established fact that a reader will be distracted.",
  },
  {
    id: 4,
    title: "Hydrating Creams",
    description: "It is a long established fact that a reader will be distracted.",
  },
  {
    id: 5,
    title: "Brightening Creams",
    description: "It is a long established fact that a reader will be distracted.",
  },
  {
    id: 6,
    title: "Soothing Creams",
    description: "It is a long established fact that a reader will be distracted.",
  },
];

const Featured: React.FC = () => {
  return (
    <section className="px-12 py-16 bg-white">
      <h3 className="text-3xl font-semibold mb-12 text-center">
        Our Featured Products
      </h3>

      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="flex gap-4">
            <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
            <div>
              <h4 className="font-semibold">{product.title}</h4>
              <p className="text-sm text-gray-500">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;