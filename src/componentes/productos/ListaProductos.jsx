
import Producto from './Producto';
import datosProductos from './datosProductos';

function ListaProductos() {
    return (
        <div>
            {datosProductos.map((producto, index) => (
                <Producto
                    id={producto.id}
                    key={index}
                    nombre={producto.nombre}
                    variedad={producto.variedad}
                    imagen={producto.imagen}
                />
            ))}
        </div>
    )

}

export default ListaProductos;
