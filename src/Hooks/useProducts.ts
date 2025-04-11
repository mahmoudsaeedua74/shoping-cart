import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  imageCover: string;
  category: {
    name: string;
  };
  priceAfterDiscount:string;
  images: string[];
}

export default function useProducts() {
  const [products, setProducts] = useState<Product[] | null>(null);
  
  async function getProduct() {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  }
  
  useEffect(() => {
    getProduct();
  }, []);
  
  return { products };
}
