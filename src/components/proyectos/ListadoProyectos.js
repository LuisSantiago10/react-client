import React, { useContext, useEffect } from 'react'
import { Proyecto } from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContex';
import { CSSTransition,TransitionGroup } from 'react-transition-group';

export const ListadoProyectos = () => {

    const proyectosContex = useContext(proyectoContext);
    const { proyectos,obtenerProyectos } = proyectosContex;
 
     useEffect(() => {
         obtenerProyectos();
     }, [])

    if(proyectos.lenght === 0) return <p>no hay proyectos</p>;


    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
            {
                proyectos.map(proyecto =>(
                    <CSSTransition
                        key={proyecto.Id}
                    >
                        <Proyecto 
                        proyecto={proyecto}
                        />
                    </CSSTransition>
                ))
            }
            </TransitionGroup>
        </ul>
    )
}
