import axios from 'axios';
import { useState, useEffect } from 'react'
import { PacmanLoader } from 'react-spinners'

function Products() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        (
            axios.get(`https://fakestoreapi.com/products`).then((response) => {
                setItems(response.data);
                setLoading(false);
            })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                })
        )
    }, [])

    return <>
        {loading && <PacmanLoader color="rgba(92, 230, 44, 1)" />}
        {error && <div className="danger">Errore: {error}</div>}
        <div className="items-container row">
            {
                items.map((item) =>
                    <div key={item.id} className="card col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                        <img src={item.image} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{item.price}€</li>
                            <li className="list-group-item">{item.category}</li>
                            <li className="list-group-item">
                                <ul className="ratings">
                                    <li>{item.rating.count}</li>
                                    <li>{item.rating.rate}</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                )
            }
        </div>
    </>
}

export default Products