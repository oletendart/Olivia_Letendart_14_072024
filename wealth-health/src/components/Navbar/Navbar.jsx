import './Navbar.scss';
import logo from '../../assets/logoWealthHealth.png';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <navbar>
            <ul>
                <li>
                    <Link to="/">
                        <img src={logo}
                            alt="logo wealth health"/>
                    </Link>
                </li>
                <li>
                    <Link to="current-employess">
                        <button>View current employees</button>
                    </Link>
                </li>
            </ul>
        </navbar>
    )
}