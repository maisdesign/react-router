import { Outlet } from "react-router-dom";
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"


function HomeLayout({ apiCategory }) {
    return (
        <div className="container-fluid">
            <Header apiCategory={apiCategory} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default HomeLayout
