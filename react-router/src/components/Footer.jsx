import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar"
function Footer() {
    const routeLocation = useLocation();
    const navLocation = 'footer';
    return <>
        <NavBar location={navLocation} />
        {console.log("Route Location " + routeLocation.hash)}
    </>
}

export default Footer