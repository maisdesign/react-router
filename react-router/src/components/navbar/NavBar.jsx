import { NavLink, Link } from "react-router-dom";
function NavBar({ location, apiCategory }) {
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
                        <li className="nav-item dropdown">
                            <button data-bs-toggle="dropdown" className="nav-link dropdown-toggle">Categories</button>
                            <ul className="dropdown-menu">
                                {(apiCategory.map((category) => <li key={category.title}><NavLink className="dropdown-item nav-link" to={"/category/" + category.title}>{category.title}</NavLink></li>
                                ))}
                            </ul>

                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    </>
}

export default NavBar

{/*
    
    <nav nav nav nav className="fixed top-0 w-full z-50 bg-[#fafaf5]/80 backdrop-blur-xl" >
    <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1440px] mx-auto relative">
        <div className="flex items-center gap-12">
            <a className="text-xl font-black tracking-tighter text-[#1a1c19]" href="/">BoolStore</a>
            <div className="hidden md:flex gap-8 items-center">
                <a className="font-['Inter'] font-bold tracking-tighter uppercase text-sm text-[#470b00] border-b border-[#470b00] pb-1 hover:opacity-100 transition-opacity duration-300" href="#">Collections</a>
                <a className="font-['Inter'] font-bold tracking-tighter uppercase text-sm text-[#1a1c19] opacity-60 hover:opacity-100 transition-opacity duration-300" href="#">Archive</a>
                <a className="font-['Inter'] font-bold tracking-tighter uppercase text-sm text-[#1a1c19] opacity-60 hover:opacity-100 transition-opacity duration-300" href="#">Studio</a>
                <a className="font-['Inter'] font-bold tracking-tighter uppercase text-sm text-[#1a1c19] opacity-60 hover:opacity-100 transition-opacity duration-300" href="#">About</a>
            </div>
        </div>
        <div className="flex items-center gap-6">
            <div className="hidden sm:block">
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">search</span>
            </div>
            <div className="flex gap-4">
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors" data-icon="shopping_cart">shopping_cart</span>
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors" data-icon="account_circle">account_circle</span>
            </div>
        </div>
        <div className="bg-[#e8e8e4] h-[1px] w-full absolute bottom-0 left-0"></div>
    </div>
</nav>
*/}