import { Link } from "react-router-dom";
import "../css/navbar.css"

function Navbar(){
    return(
        <nav className="navbar">

            <div className="logo">
                <Link to="/">Texting App</Link>
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/auth/login">Login</Link>
                <Link to="/auth/signup">Signup</Link>
            </div>
        </nav>
    )
}

export default Navbar;