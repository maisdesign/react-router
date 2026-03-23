import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout"
import HomeLayout from "./layouts/HomeLayout"
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx"
import Products from "./pages/Products.jsx"
import ProductDetail from "./pages/ProductDetail.jsx"
import CategoryPage from "./pages/CategoryPage.jsx"
import { productsApi, singleCategoryApi, categoriesApi } from "./data/apiEndPoints.js"
import { useState, useEffect } from "react"
import { fetcher } from "./data/fetcher"
export default function App() {
  const [apiCategory, setApiCategory] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetcher(categoriesApi).then((response) => {
      return Promise.all(response.data.map(
        (category) => fetcher(singleCategoryApi + category).then((response) => ({ title: category, image: response.data[0].image, firstItem: response.data[0].title })
        ))).then((response) => { setApiCategory(response); setLoading(false) });

    })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout apiCategory={apiCategory} />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<DefaultLayout apiCategory={apiCategory} />}>
          <Route path="/products" element={<Products origin={productsApi} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}