import './Navbar.scss';
import logo from '../../assets/logoWealthHealth.png';

export default function Navbar() {
    return (
        <navbar>
            <ul>
                <li>
                    <img src={logo}
                         alt="logo wealth health"/>
                </li>
            </ul>
        </navbar>
    )
}