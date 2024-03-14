
import Producto from './Producto';
import datosProductos from './datosProductos';

function DetalleProductos(producto) {
    return (
        <div>
            {datosProductos.map((producto, index) => (
                <Producto
                    key={index}
                    nombre={producto.nombre}
                    variedad={producto.variedad}
                    info={producto.info}
                    imagen={producto.imagen}
                />
            ))}
        </div>
    )

}

export default DetalleProductos;
