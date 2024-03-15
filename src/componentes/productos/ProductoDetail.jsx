import PropTypes from "prop-types";
import imagenes from "./imagenes";
import { Link } from 'react-router-dom';
import './imagenes.css';

function ProductoDetail(props) {
    return (
        <section className="seccion-productos">
            <h2> {props.nombre} </h2>
            <p> {props.variedad} </p>
            <p> {props.info} </p>
            <p> Stock: {props.stock} </p>
            <p> Precio: {props.precio} </p>
            <div className="imagenes-container">
                {props.imagen.map((imagenName, index) => (
                    <img key={index} src={imagenes[imagenName]} alt={props.nombre} />
                ))}
            </div>
            <div className="container">
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
    stock: PropTypes.any,
    precio: PropTypes.any,
    imagen: PropTypes.arrayOf(PropTypes.string),
};
;

export default ProductoDetail;