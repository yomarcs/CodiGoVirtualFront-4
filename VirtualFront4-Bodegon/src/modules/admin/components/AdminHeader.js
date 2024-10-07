import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './../../../assets/img/static/apple.png'

const AdminHeader = () => {
    return (
        // <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-success">
                <img src={logo} className="mr-2" height="40px" alt=""/>
                <Link className="navbar-brand" to={'/'}>El Bodegón</Link>
                {/* <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button> */}
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/admin/categorias"} activeClassName="active">Categorias</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/admin/tipos"} activeClassName="active">Tipos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/admin/marcas"} activeClassName="active">Marcas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/admin"} activeClassName="active" exact>Productos</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Buscar" />
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </nav> 
        // </header>  
    )
}

export default AdminHeader
