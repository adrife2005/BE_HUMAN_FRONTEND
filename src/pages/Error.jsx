import { Link } from 'react-router-dom';
import '../css/components/error.css';

function Error() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Oops! La página que estás buscando no existe.</p>
            <p>Es posible que desees comprobar la URL o regresar a la <Link to="/">Pagina de inicio</Link>.</p>
            <div className="search-box">
                <input className='error__input' type="text" placeholder="Search..." />
                <button className='btn__error'>Buscar</button>
            </div>
        </div>
    );
}

export default Error;