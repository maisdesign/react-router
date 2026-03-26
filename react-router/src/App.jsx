import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout"
import HomeLayout from "./layouts/HomeLayout"
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx"
import Products from "./pages/Products.jsx"
import ProductDetail from "./pages/ProductDetail.jsx"
import CategoryPage from "./pages/CategoryPage.jsx"
import NotFound from "./pages/NotFound.jsx"
import { productsApi, singleCategoryApi, categoriesApi } from "./data/apiEndPoints.js"
import { useState, useEffect } from "react"
import { fetcher } from "./data/fetcher.js"
export default function App() {
  const [apiCategory, setApiCategory] = useState([])

  useEffect(() => {
    fetcher(categoriesApi).then((response) => {
      return Promise.all(response.data.map(
        (category) => fetcher(singleCategoryApi + category).then((response) => ({ title: category, image: response.data[0].image, firstItem: response.data[0].title })
        ))).then((response) => { setApiCategory(response) });
    }).catch(() => { })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout apiCategory={apiCategory} />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<DefaultLayout apiCategory={apiCategory} />}>
          <Route path="/products/:page" element={<Products origin={productsApi} basePath="/products" />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/category/:categoryName/:page" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}