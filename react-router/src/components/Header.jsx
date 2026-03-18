import { useLocation } from "react-router-dom";
import NavBar from "./NavBar"
import Jumbotron from "./Jumbotron"
function Header() {
    const routeLocation = useLocation();
    const navLocation = 'header';
    return <>
        <NavBar location={navLocation} />
        {routeLocation.pathname === "/" && <Jumbotron />}
    </>
}

export default Header