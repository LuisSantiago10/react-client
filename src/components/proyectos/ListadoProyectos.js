import React, { useContext, useEffect } from 'react'
import { Proyecto } from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContex';

export const ListadoProyectos = () => {

    const proyectosContex = useContext(proyectoContext);
    const { proyectos,obtenerProyectos } = proyectosContex;
 
     useEffect(() => {
         obtenerProyectos();
     }, [])

    if(proyectos.lenght === 0) return <p>no hay proyectos</p>;


    return (
        <ul className="listado-proyectos">
            {
                proyectos.map(proyecto =>(
                    <Proyecto 
                        key={proyecto.Id}
                        proyecto={proyecto}
                    />
                ))
            }
        </ul>
    )
}
