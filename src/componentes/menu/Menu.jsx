import {Link} from "react-router-dom";
import './Menu.css';


const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li> <Link to="/">Inicio</Link> </li>
                <li> <Link to="/productos">Productos</Link> </li>
                <li> <Link to="/registro">Registro</Link> </li>
                <li> <Link to="/login">Login</Link> </li>
            </ul>
        </nav>
    )
};
export default Menu;