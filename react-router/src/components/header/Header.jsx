import NavBar from "../navbar/NavBar"
function Header({ apiCategory }) {
    const navLocation = 'header';
    return <>
        <NavBar location={navLocation} apiCategory={apiCategory} />
    </>
}

export default Header
