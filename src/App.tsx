import { createBrowserRouter } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import { ProductLayoutProvider } from "./context/ProductLayoutContext";
function App() {
  const route = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return (
    <ProductLayoutProvider>
      <RouterProvider router={route} />
    </ProductLayoutProvider>
  );
}

export default App;
