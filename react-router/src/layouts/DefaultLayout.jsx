import { Outlet } from "react-router-dom";
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"


function DefaultLayout({ apiCategory }) {
    return (
        <div className="container-fluid">
            <Header apiCategory={apiCategory} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default DefaultLayout
