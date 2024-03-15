import './Seccion.css';
import ceramicaViva from '../../assets/img/ceramicaViva.jpg';
import Boton from '../boton/Boton';

function Seccion() {
    const HandlerClicBoton = () =>{
        alert('Hiciste click en el boton');
    }
    return (
        <section className='seccion'>
            <h2> Explora la Magia de las Creaciones Únicas </h2>
            <img src={ceramicaViva}/>
            <p> Sumérgete en el mundo de la cerámica viva, donde cada pieza es más que un simple objeto: es una obra de arte única e irremplazable. Cada creación, moldeada con amor y dedicación, captura la esencia de su creador y cobra vida propia. Desde la suave textura de la arcilla hasta los delicados detalles pintados a mano, cada pieza cuenta una historia que trasciende el tiempo. En un mundo lleno de producción en masa, la cerámica viva nos recuerda la magia de poseer algo verdaderamente especial, algo que habla directamente al alma y que perdurará para siempre. </p>
        </section>
    )
}

export default Seccion;