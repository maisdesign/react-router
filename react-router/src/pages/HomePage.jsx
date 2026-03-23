import { useState, useEffect } from 'react'
import Hero from "../components/sections/Hero.jsx"
import BrandIdentity from "../components/home/BrandIdentity.jsx"
import Categories from "../components/categories/Categories.jsx"
import HomeSingleProduct from "../components/products/singleProduct/HomeSingleProduct.jsx"
import Newsletter from "../components/sections/Newsletter.jsx"
import { categoriesApi, singleCategoryApi } from "../data/apiEndPoints.js"
import { fetcher } from '../data/fetcher.jsx'
import { heroConfigObj, brandIdentityObj, featuredObj } from "../data/config.js"
import { PacmanLoader } from 'react-spinners'

function HomePage() {
    const [apiCategory, setApiCategory] = useState([]);
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

    return <>
        <Hero heroConfigObj={heroConfigObj} />
        <BrandIdentity brandObj={brandIdentityObj} />
        {(loading) ? <PacmanLoader color="rgba(92, 230, 44, 1)" /> :
            (error) ? <div className="alert alert-danger">Errore: {error}</div> :
                <Categories apiCategory={apiCategory} />
        }
        <HomeSingleProduct product={featuredObj} />
        <Newsletter />
    </>
}

export default HomePage