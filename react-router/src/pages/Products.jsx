import { useState, useEffect } from 'react'
import { PacmanLoader } from 'react-spinners'
import { fetcher } from '../data/fetcher.jsx'
import { Link } from "react-router-dom";
import { ITEMS_PER_PAGE } from "../data/config.js"

function Products({ origin }) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetcher(origin).then((response) => {
            setItems(response.data);
            setLoading(false);
        })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            })
    }, [origin])

    return <>
        {loading && <PacmanLoader color="rgba(92, 230, 44, 1)" />}
        {error && <div className="danger">Errore: {error}</div>}
        <div className="items-container">
            {
                items.map((item) =>
                    <Link key={item.id} className="product-card" to={"/product/" + item.id}>
                        <div className="product-card-image-box">
                            <img src={item.image} className="product-card-img" alt={item.title} />
                            <div className="product-card-hover-btn">
                                <span className="material-symbols-outlined">add_shopping_cart</span>
                            </div>
                        </div>
                        <div className="product-card-info">
                            <p className="product-card-title">{item.title}</p>
                            <span className="product-card-price">{item.price}€</span>
                        </div>
                    </Link>
                )
            }
        </div>
    </>
}

export default Products
