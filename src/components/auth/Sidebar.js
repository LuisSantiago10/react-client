import React from 'react'
import { ListadoProyectos } from '../proyectos/ListadoProyectos'
import { NuevoProyecto } from '../proyectos/NuevoProyecto'

export const Sidebar = () => {
    return (
        <aside>
            <h1>MERN <span>Tasks</span> </h1>
            <NuevoProyecto />
            <div className="proyecto">
                <h2>Tus proyectos</h2>
                <ListadoProyectos />
            </div>
        </aside>
    )
}
