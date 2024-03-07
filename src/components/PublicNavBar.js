import { Link } from 'react-router-dom';
import NavBarCss from '../css/NavBar.module.css';
//Image
import Logo from '../global/stopwatch.png'

const PublicNavBar = () => {
    const navbar = (
        <div className={NavBarCss.NavBarMain}>
            <div className={NavBarCss.Main}>
                <img src={Logo} alt="Logo" className={NavBarCss.Img} />
                <p className={NavBarCss.Title}>NWA Workshop</p>
            </div>
            <nav className={NavBarCss.SubText}>
                <ul className={NavBarCss.Nav_links}>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Function">Function</Link></li>
                    <li><Link to="/Contact">Contact US</Link></li>
                    <li><Link to="/PLC">PLC</Link></li>
                </ul>
                <Link to="/Login"><button className={NavBarCss.Login}>Login</button></Link>
            </nav>
        </div>
    )
    return navbar
}

export default PublicNavBar
