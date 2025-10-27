export default function Header(){
  return(
    //Header
    <header className="backdrop">
      <div className="container wrap">
        <a href="#home" className="logo">
          <span className="mark" aria-hidden="true">⚡</span>
          <span>TechRiseSolutions</span>
        </a>
        <nav aria-label="Primary navigation">
          <ul>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        <button className="mobile-toggle" aria-controls="mobile-menu" aria-expanded="false">Menu ▾</button>
      </div>
    </header>  
  )
}