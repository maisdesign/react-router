import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { productsApi } from "../data/apiEndPoints.js"
import SingleProduct from "../components/products/singleProduct/SingleProduct.jsx"
import { PacmanLoader } from 'react-spinners'
import { fetcher } from "../data/fetcher.js"
import { useCategories } from "../contexts/CategoriesContext"

export default function ProductDetail() {
    let { id } = useParams();
    id = parseInt(id);
    const navigate = useNavigate();
    const productUrl = productsApi + id;
    const [singleProduct, setSingleProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { totalProducts } = useCategories()
    useEffect(() => {
        fetcher(productUrl).then(
            (response) => {
                setSingleProduct(response.data);
                setLoading(false)
            })
            .catch(() => {
                navigate("/products/1");
                setLoading(false);
            })
    }, [productUrl]);

    return <>
        {(loading) ? <PacmanLoader color="rgba(92, 230, 44, 1)" /> :
            <>
                <div className="product-nav-bar">
                    {id > 1 ? <button className="product-nav-btn" onClick={() => navigate("/product/" + (id - 1))}>Prev</button> : null}{id < totalProducts ? <button className="product-nav-btn" onClick={() => navigate("/product/" + (id + 1))}>Next</button> : null}
                </div>
                <SingleProduct product={singleProduct} />
                <div className="product-nav-bar">
                    {id > 1 ? <button className="product-nav-btn" onClick={() => navigate("/product/" + (id - 1))}>Prev</button> : null}
                    {id < totalProducts ? <button className="product-nav-btn" onClick={() => navigate("/product/" + (id + 1))}>Next</button> : null}
                </div>
            </>
        }

    </>
}
