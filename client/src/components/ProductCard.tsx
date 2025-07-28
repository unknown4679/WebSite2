import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  sales: number;
  rating: number;
  stock: number;
  prediction: {
    type: "increase" | "decrease" | "stable";
    value: string;
  };
  image: string;
}

export default function ProductCard({
  name,
  category,
  price,
  sales,
  rating,
  stock,
  prediction,
  image,
}: ProductCardProps) {
  const getPredictionIcon = () => {
    switch (prediction.type) {
      case "increase":
        return <TrendingUp className="text-green-600" size={16} />;
      case "decrease":
        return <TrendingDown className="text-red-600" size={16} />;
      default:
        return <Minus className="text-blue-600" size={16} />;
    }
  };

  const getPredictionColor = () => {
    switch (prediction.type) {
      case "increase":
        return "text-green-600";
      case "decrease":
        return "text-red-600";
      default:
        return "text-blue-600";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-slate-800">{name}</h4>
          <p className="text-slate-600 text-sm">{category}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-slate-800">{price}</div>
          <div className={`text-sm flex items-center gap-1 ${getPredictionColor()}`}>
            {getPredictionIcon()}
            {prediction.value}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center text-sm">
        <div>
          <div className="font-semibold text-slate-800">{sales.toLocaleString()}</div>
          <div className="text-slate-500">Sales</div>
        </div>
        <div>
          <div className="font-semibold text-slate-800">{rating}</div>
          <div className="text-slate-500">Rating</div>
        </div>
        <div>
          <div className="font-semibold text-slate-800">{stock.toLocaleString()}</div>
          <div className="text-slate-500">Stock</div>
        </div>
      </div>
    </div>
  );
}
