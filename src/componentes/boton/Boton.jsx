import PropsTypes from "prop-types";
import "./Boton.css";


function Boton(props) {
    const estilosBoton = {
        backgroundColor: props.color
    }
    return (
        <div className="contenedor-btn">
            <button className="boton" style={estilosBoton} onClick={props.onClick}> {props.texto} </button>

        </div>
    )

}
Boton.propsTypes = {
    color: PropsTypes.string,
    texto: PropsTypes.string.isRequired,
    onClick: PropsTypes.func,
};

export default Boton;