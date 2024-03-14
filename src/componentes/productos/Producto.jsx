
import PropTypes from "prop-types";
import './Productos.css';
import { Link } from 'react-router-dom';

function Productos(props) {
    return (
        <section className="seccion-productos">
            <h2> {props.nombre} </h2>
            <p> {props.variedad} </p>
            <p> {props.info} </p>
            <Link to={`/detalleProducto/${props.id}`}>
                <button>Ver Detalles</button>
            </Link>
        </section>
    );
}
Productos.propTypes = {
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    variedad: PropTypes.string,
    info: PropTypes.string,
    imagen: PropTypes.string,
};
;

export default Productos;