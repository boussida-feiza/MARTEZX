import { Link ,Outlet} from "react-router-dom";

const NavBar =()=> {
    return(

        <>
        <nav>
            <ul>
                <li>
                    <Link to="/"> Home</Link>
                </li>
                <li>
                    <Link to="/about"> About</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
};
export default NavBar;