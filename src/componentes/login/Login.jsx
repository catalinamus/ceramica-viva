// Login.js
import './Login.css';
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleLogin = () => {
        // This is just a mock, so we're not doing any actual login
        alert('Ingresaste exitosamente');
    };

    return (
        <div className='login-container'>
            <h2> Iniciar Sesión </h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="contraseña">Contraseña:</label>
                    <input
                        type="contraseña"
                        id="contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        required
                    />
                </div>
                <button type="button" className='login-button' onClick={handleLogin}> Iniciar Sesión </button>
            </form>
        </div>
    );
}

export default Login;
