function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">Mi Sitio</div>
        <ul className="navbar-menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/services">Servicios</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
    );
  }
  export default Navbar;