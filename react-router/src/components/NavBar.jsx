import { NavLink } from "react-router-dom";
function NavBar() {
    return <nav>
        <NavLink to="/" end>Home Page</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
    </nav>
}

export default NavBar