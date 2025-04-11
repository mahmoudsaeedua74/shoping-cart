import { useProductLayout } from "../../context/useProductLayout";

export default function FilterBySort() {
  // Here you can filter the products by show the products by 6 or 12 and you can change the layout of the products to be grid or list
  const { layoutGrid, layoutSlice, show, setLayoutGrid, setLayoutSlice, setShow, setSortByName } = useProductLayout();


  return (
    <div className="bg-[#F6F7F8] rounded py-3 text-sm mb-4 px-4 flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="flex flex-col md:flex-row gap-6 items-center w-full md:w-auto">
        <p>12 items</p>
        <div className="flex items-center gap-2">
          <label htmlFor="sortByName" className="text-textColor font-medium">
            Sort by Name:
          </label>
          <select
            id="sortByName"
            className="bg-transparent border border-gray-300 rounded px-2 py-1 text-sm"
            onChange={(e) => setSortByName(e.target.value)}
            defaultValue={"name"}
          >
            <option value="name">Name</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="showItems" className="text-textColor font-medium">
            Show:
          </label>
          <select
            id="showItems"
            className="bg-transparent border border-gray-300 rounded px-2 py-1 text-sm"
            onChange={(e) => setShow(e.target.value)}
            defaultValue={show}
          >
            <option value="12">12</option>
            <option value="6">6</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <i
          className={`fa-solid fa-grip text-2xl cursor-pointer ${layoutGrid ? "text-main" : "text-text"}`}
          onClick={() => setLayoutGrid()}
          aria-label="Grid layout"
          role="button"
        ></i>
        <i
          className={`fa-solid fa-bars text-xl cursor-pointer ${layoutSlice ? "text-main" : "text-text"}`}
          onClick={() => setLayoutSlice()}
          aria-label="List layout"
          role="button"
        ></i>
      </div>
    </div>
  );
}
