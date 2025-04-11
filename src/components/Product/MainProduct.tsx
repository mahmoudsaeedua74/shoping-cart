import ProductsFilter from "../Fillter/ProductsFilter";
import FilterBySort from "../Fillter/FilterBySort";
import Products from "./Products";

export default function MainProduct() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-text mb-4">Must Products</h2>
      <div className="grid md:grid-cols-[1fr_3fr] gap-12">
        <div>
          <ProductsFilter />
        </div>
        <div>
          <div>
            <FilterBySort />
            <Products />
          </div>
        </div>
      </div>
    </section>
  );
}
