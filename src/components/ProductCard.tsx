
import React, { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  image,
  tag,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-md transition-all duration-500 ease-out-expo hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with zoom effect */}
      <div className="relative overflow-hidden aspect-square">
        <div
          className={cn(
            "w-full h-full bg-cover bg-center transition-transform duration-700 ease-out-expo",
            { "scale-110": isHovered }
          )}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        
        {/* Tag label */}
        {tag && (
          <div className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-primary text-white">
            {tag}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">{price}</span>
          <Button variant="outline" size="sm" className="hover-lift">
            View Details
          </Button>
        </div>
      </div>
      
      {/* Hover overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500",
          { "opacity-100": isHovered }
        )}
      ></div>
    </div>
  );
};

export default ProductCard;
