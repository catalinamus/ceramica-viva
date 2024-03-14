import ProductoDetail from './ProductoDetail';
import datosProductos from './datosProductos';
import { useParams } from 'react-router-dom';

function ProductoDetalle() {
    const { id } = useParams();

    // Convert id to integer, assuming it's passed as a string in the URL
    const productId = parseInt(id);

    // Find the product with the matching id
    const producto = datosProductos.find(producto => producto.id === productId);

    if (!producto) {
        // If no product is found with the given id, display a message or handle it accordingly
        return <div>Product not found</div>;
    }

    return (
        <div>
            <ProductoDetail
                nombre={producto.nombre}
                variedad={producto.variedad}
                info={producto.info}
                imagen={producto.imagen}               
            />
        </div>
    );
}

export default ProductoDetalle;

