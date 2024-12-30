import './Navbar.scss';
import logo from '../../assets/logoWealthHealth.webp';
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <nav>
            <ul className="navigation">
                <li>
                    <Link to="/">
                        <img src={logo} alt="logo wealth health" className="logoNavbar"/>
                    </Link>
                </li>
                <li>
                    {location.pathname === "/current-employess" ? (
                        <button disabled>View current employees</button>
                    ) : (
                        <Link to="/current-employess">
                            <button>View current employees</button>
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}
