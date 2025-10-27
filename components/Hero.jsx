export default function Hero(){
  return(
    //Hero
    <section id="home" className="hero">
      <div className="container grid">
        <div>
          <span className="eyebrow">Adaptable • Amigable • Realista</span>
          <h1>Servicios digitales para obtener resultados reales</h1>
          <p className="lead">Ayudamos a las pequeñas empresas a destacarse con<strong>desarrollo web</strong>, <strong>Modelado 3D</strong>, <strong>mantenimiento informático preventivo - correctivo</strong>, y <strong>mantenimiento de sitios web</strong>. Precios justos, entrega rapida, apoyo humano.</p>
          <div style={{display:"flex",gap:".8rem",marginTop:"1.1rem"}}>
            <a className="btn primary" href="#contact">Solicitar cotización</a>
            <a className="btn ghost" href="#portfolio">Vea nuestro trabajo</a>
          </div>
          <div className="statbar">
            <div className="stat"><b>30+</b><br/><span className="muted">Proyectos</span></div>
            <div className="stat"><b>10/10</b><br/><span className="muted">Soporte</span></div>
            <div className="stat"><b>48h</b><br/><span className="muted">Respuesta promedio</span></div>
          </div>
        </div>
        <div className="hero-card">
          <div className="stack">
            <span className="pill">HTML</span><span className="pill">CSS</span><span className="pill">JavaScript</span><span className="pill">React</span><span className="pill">WordPress</span><span className="pill">WooCommerce</span><span className="pill">Blender</span><span className="pill">Fusion 360</span><span className="pill">Windows</span><span className="pill">Linux</span>
          </div>
          <div className="portfolio" style={{marginTop:"1rem"}}>
            <div className="shot shot_main_1"></div>
            <div className="shot shot_main_2"></div>
            <div className="shot shot_main_3"></div>
          </div>
        </div>
      </div>
    </section>
  )
}