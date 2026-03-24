import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { productsApi } from "../data/apiEndPoints.js"
import SingleProduct from "../components/products/singleProduct/SingleProduct.jsx"
import { PacmanLoader } from 'react-spinners'
import { fetcher } from "../data/fetcher.js"
export default function ProductDetail() {
    const { id } = useParams();
    const productUrl = productsApi + id;
    const [singleProduct, setSingleProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetcher(productUrl).then(
            (response) => {
                setSingleProduct(response.data);
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            })
    }, [productUrl]);

    return <>
        {(loading) ? <PacmanLoader color="rgba(92, 230, 44, 1)" /> :
            (error) ? <div className="alert alert-danger">Errore: {error}</div> :
                <SingleProduct product={singleProduct} />
        }

    </>
}
