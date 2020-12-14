import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NuevaCuenta = () => {

    const [usuario, setUsuario] = useState({
        email:'',
        password:'',
        nombre:'',
        confirmar:''
    });

    const { email,password,confirmar,nombre } = usuario;

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
                <h1>Obtener Cuenta</h1>
                <form
                    onSubmit={ handlerSubmit }
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={ handleForm }
                        />
                    </div>
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
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Confirmar password"
                            value={confirmar}
                            onChange={ handleForm }
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Iniciar Session
                </Link>
            </div>
        </div>
    )
}
