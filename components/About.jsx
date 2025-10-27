export default function About(){
  return(
    //About
    <section id="about" className="section about">
      <div className="container split">
        <div>
          <h2>Nosotros</h2>
          <p>Somos un equipo dedicado y enfocado en ayudar a las chicas, medianas y grandes empresas a crecer con tecnología. Como microempresa, disfrutas de comunicación directa, plazos de entrega rápidos y precios flexibles.</p>
          <ul className="muted" style={{marginTop:".6rem", lineHeight:1.9}}>
            <li>✔ Enfoque centrado en el cliente y comunicación clara</li>
            <li>✔ Precios transparentes y propuestas sencillas</li>
            <li>✔ Soporte técnico</li>
          </ul>
          <div style={{marginTop:"1rem",display:"flex",gap:".7rem",flexWrap:"wrap"}}>
            <span className="pill">Facturación</span>
            <span className="pill">Precios transparentes</span>
            <span className="pill">Soporte remoto y en sitio</span>
          </div>
        </div>
        <div>
          <h2>Precios simples</h2>
          <div className="pricing">
            <div className="plan">
              <h3>Sitio de inicio</h3>
              <div className="price">Desde $4,999 MXN</div>
              <p className="muted">Sitio de una sola página o página de destino, entrega <strong>ULTRA RAPIDA.</strong></p>
              <ul>
                <li>SEO basico</li>
                <li>Desarrollo de una pagina</li>
                <li>Diseño adaptado a todo tipo de dispositivos</li>
                <li>Formulario de contacto y link de whatsapp</li>
              </ul>
            </div>
            <div className="plan" style={{borderColor:"var(--ring)"}}>
              <h3>Sitio web empresarial</h3>
              <div className="price">Desde $25,999 MXN</div>
              <p className="muted">Sitio de varias páginas diseñado para el crecimiento.</p>
              <ul>
                <li>SEO Optimizado</li>
                <li>3 – 6 paginas + blog</li>
                <li>Diseño adaptado a todo tipo de dispositivos</li>
                <li>Formulario de contacto, link de whatsapp o redes sociales</li>
                <li>Análisis y rendimiento</li>
                <li>Documentacion</li>
                <li>Capacitación</li>
              </ul>
            </div>
            <div className="plan">
              <h3>Plan de atención</h3>
              <div className="price">Desde $3,999 / mes</div>
              <p className="muted">Mantenimiento del sitio WEB & soporte.</p>
              <ul>
                <li>Actualizaciones y copias de seguridad</li>
                <li>Monitoreo del tiempo de actividad</li>
                <li>Informe mensual</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}