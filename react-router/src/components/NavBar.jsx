import { NavLink, Link } from "react-router-dom";
function NavBar({ location }) {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >Boolstore</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target={`#` + location + `Nav`} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id={location + "Nav"}>
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink className="nav-link" to="/" end>Home Page</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/products">Products</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/about-us">About Us</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default NavBar