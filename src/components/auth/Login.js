import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {

    const [usuario, setUsuario] = useState({
        email:'',
        password:''
    });

    const { email,password } = usuario;

    const handleForm = e =>{
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const handlerSubmit = e =>{
        e.preventDefault();
    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Inicia Session</h1>
                <form
                    onSubmit={ handlerSubmit }
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={ handleForm }
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={ handleForm }
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Session"
                        />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener cuenta
                </Link>
            </div>
        </div>
    )
}
