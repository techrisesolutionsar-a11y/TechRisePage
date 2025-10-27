export default function Footer(){
  return(
    <footer>
      <div className="container wrap">
        <div className="logo"><span className="mark" aria-hidden="true">⚡</span><span>TechRiseSolutions</span></div>
        <div>© <span id="year"></span> TechRiseSolutions. Todos los desrechos reservados.</div>
        <div style={{display:"flex",gap:".6rem",flexWrap:"wrap"}}>
          <a className="pill" href="#privacy">Privacidad</a>
          <a className="pill" href="#terms">Terminos y condiciones</a>
        </div>
      </div>
    </footer>
  )
}