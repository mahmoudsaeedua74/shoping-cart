import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Loading from "../loading/Loading";
import StarRating from "../../ui/StarRating";
import { useProductLayout } from "../../context/useProductLayout";

export default function Products() {
  const { products } = useProducts();
  const { layoutGrid } = useProductLayout();
  if (products == null) return <Loading />;
  return (
    <section
      className={`grid 
       ${
         layoutGrid
           ? "xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-between items-center gap-6 mb-10"
           : "grid-cols-1  "
       }
      `}
    >
      {Array.isArray(products) && products.slice(0, 8).map((item) => {
        return (
          <div
            key={item.id}
            className={` relative ${ 
              layoutGrid
                ? "card "
                : "flex gap-3 py-4  border-b-4 border-gray-200 md:flex-row flex-col"
            } `}
          >
            <div
              className={`relative ${
                layoutGrid ? "" : "p-5 border-2 border-[#F6F7F8] rounded"
              } flex justify-center items-center `}
            >
              <img
                src={item?.imageCover}
                alt={item.title}
                className={`${layoutGrid ? "w-full" : "w-[200px] object-cover"}`}
              /> 

              <div className="cardLayer">
                {layoutGrid ? (
                  <>
                    <div className="layerImage">
                      <i className="fa-solid fa-cart-shopping " ></i>
                    </div>
                    <span
                      onClick={() => console.log("hello")}
                      className="layerImage"
                    >
                      <i className="fa-regular fa-heart " ></i>
                    </span>
                    <Link
                      to={`/`}
                      className="layerImage "
                    >
                      <i className="fa-solid fa-eye " ></i>
                    </Link>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      to={`/`}
                      className="layerImage"
                    >
                      <i className="fa-solid fa-eye " ></i>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="flex-1">
              <h3
                id="productTitle"
                className={`  font-semibold capitalize text-textColor ${
                  layoutGrid
                    ? "border-t text-[14px] pt-2"
                    : "text-[24px] font-semibold capitalize text-textColor"
                } `}
              >
                {layoutGrid ? item.title.slice(0, 18) : item.title}
              </h3>{" "}
              {layoutGrid ? (
                <StarRating/>
              ) : (
                <div className="flex items-center gap-x-5 my-3 border-b-2 border-gray-200 w-fit">
                  <div>
                  <StarRating/>
                  </div>
                  <p className="text-gray-600" aria-live="polite">
                    0 reviews
                  </p>
                  <Link
                    to={"/"}
                    className="text-main font-semibold"
                    aria-label="Submit a review"
                  >
                    Submit a review
                  </Link>
                </div>
              )}
              <div
                className={`  ${
                  layoutGrid ? "text-[16px] " : "text-[24px] my-4"
                } flex gap-2 `}
              >  {item.priceAfterDiscount ?
                <>
                    <div>
                        <span className='text-second '>{item.priceAfterDiscount} EGP </span>
                        <span className=' line-through text-[12px] text-gray-300' >{item.price} EGP </span>
                    </div> </> : <span className='text-second ' >{item.price} EGP </span>
            }
              </div>
              {layoutGrid ? null : (
                <>
                  <p className="text-sm">{item.description}</p>

                  <div className="flex items-center gap-6 mt-3">
                    <button
                      aria-label="Add to shopping cart"
                      className="btn"
                    >
                      <i className="fa-solid fa-cart-shopping text-xl"></i>{" "}
                      <span>Add To Cart</span>
                    </button>
                    <button
                      className="btn"
                      role="button"
                      aria-label="Add to wishlist"
                    >
                      <i className="fa-regular fa-heart text-xl"></i>
                    </button>
                  </div>
                </>
              )}
            </div>
            {item.priceAfterDiscount ? <span
                className="bg-[#DB4444] text-white left-4 rounded-md px-2  absolute top-4"
            >
                {Math.floor(((item.price - Number(item.priceAfterDiscount)) / item.price * 100))}%
            </span> : ""}
          </div>
        );
      })}
    </section>
  );
}
