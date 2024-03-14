import PropTypes from "prop-types";
import './Productos.css';
import imagenes from "./imagenes";
import { Link } from 'react-router-dom';

function ProductoDetail(props) {
    return (
        <section className="seccion-productos">
            <h2> {props.nombre} </h2>
            <p> {props.variedad} </p>
            <p> {props.info} </p>
            <div className="contenedor-img">
                <img src={imagenes[props.imagen]} alt={props.nombre} />
            </div>
            <div>
            <Link to={`/productos`}>
                <button>Volver</button>
            </Link>
            </div>
        </section>
    );
}
ProductoDetail.propTypes = {
    nombre: PropTypes.string.isRequired,
    variedad: PropTypes.string,
    info: PropTypes.string,
    imagen: PropTypes.string,
};
;

export default ProductoDetail;