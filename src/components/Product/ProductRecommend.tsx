import useProducts from "../../Hooks/useProducts";
import { Link } from "react-router-dom";
import StarRating from "../../ui/StarRating";

export default function ProductRecommend() {
  const { products } = useProducts();

  if (!products) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Recommended Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array.isArray(products) &&
          products.slice(20, 25).map((product) => (
            <div key={product.id} className="card">
              <div className="relative flex justify-center items-center">
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="w-full  object-contain"
                />
                <div className="cardLayer">
                  <div className="layerImage">
                    <i className="fa-solid fa-cart-shopping "></i>
                  </div>
                  <span className="layerImage">
                    <i className="fa-regular fa-heart "></i>
                  </span>
                  <Link to={`/`} className="layerImage">
                    <i className="fa-solid fa-eye "></i>
                  </Link>
                </div>
              </div>
              <h3 className="font-semibold capitalize text-textColor border-t-4 text-[14px] pt-2">
                {product.title.slice(0, 18)}
              </h3>
              <StarRating />
              <div className="text-[16px] flex gap-2">
                {product.priceAfterDiscount ? (
                  <>
                    <div>
                      <span className="text-second ">
                        {product.priceAfterDiscount} EGP{" "}
                      </span>
                      <span className=" line-through text-[12px] text-gray-300">
                        {product.price} EGP{" "}
                      </span>
                    </div>{" "}
                  </>
                ) : (
                  <span className="text-second ">{product.price} EGP </span>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
