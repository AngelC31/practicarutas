import { NavLink } from "react-router-dom";
import './navbar.css';

const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/home" className={({isActive})=>isActive? 'active':"" }>Inicio</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/" className={({isActive})=>isActive? 'active':"" }>Acerca de</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Roles
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/users" className={({isActive})=>isActive? 'active':"" }>Usuarios</NavLink></li>
            <li><a className="dropdown-item" href="/admin">Admin</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/analytics">Analytics</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}
export default NavBar