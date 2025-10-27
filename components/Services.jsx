export default function Services(){
  return(
    //Services
    <section id="services" className="section">
      <div className="container">
        <h2>Servicios</h2>
        <p className="muted">Todo lo que necesitas para lanzar, mantener y visualizar tus ideas.</p>
        <div className="cards">
          <article className="card" aria-labelledby="svc-web-dev">
            <div className="icon" aria-hidden="true">💻</div>
            <h3 id="svc-web-dev">Desarrollo WEB</h3>
            <p className="muted">Sitios web amigables y receptivos diseñados para captar potenciales clientes y mejorar el SEO.</p>
            <ul>
              <li>Sitios web y páginas de destino comerciales</li>
              <li>E‑commerce</li>
              <li>Rendimiento y accesibilidad</li>
              <li>Formularios</li>
            </ul>
            <div className="stack"><span className="pill">React</span><span className="pill">Next.js</span><span className="pill">WordPress</span><span className="pill">Netlify/Vercel</span></div>
          </article>
          <article className="card" aria-labelledby="svc-3d">
            <div className="icon" aria-hidden="true">🧊</div>
            <h3 id="svc-3d">Modelado 3D</h3>
            <p className="muted">Modelados de alta calidad para todo tipo de piezas, industriales y de impresión.</p>
            <ul>
              <li>Visualización y renders de productos</li>
              <li>Desarrollo de mecanismos</li>
              <li>Texturizado</li>
              <li>Export to GLB/OBJ/STL</li>
            </ul>
            <div className="stack"><span className="pill">Blender</span><span className="pill">Substance</span><span className="pill">Cycles/Eevee</span></div>
          </article>
          <article className="card" aria-labelledby="svc-it">
            <div className="icon" aria-hidden="true">🛠️</div>
            <h3 id="svc-it">Limpieza de computo</h3>
            <p className="muted">Servicio preventivo y correctivo de software y hardware.</p>
            <ul>
              <li>Diagnosticos & tune‑ups</li>
              <li>OS install & virus removal</li>
              <li>SSD/RAM upgrades</li>
              <li>Data backup & recovery</li>
            </ul>
            <div className="stack"><span className="pill">Windows</span><span className="pill">Linux</span><span className="pill">macOS</span></div>
          </article>
          <article className="card" aria-labelledby="svc-web-care">
            <div className="icon" aria-hidden="true">🔧</div>
            <h3 id="svc-web-care">Mantenimiento WEB</h3>
            <p className="muted">Mantenemos su sitio web seguro, rápido y actualizado.</p>
            <ul>
              <li>Actualizaciones de contenido</li>
              <li>Copias de seguridad</li>
              <li>Monitoreo del tiempo de actividad y rendimiento</li>
              <li>Informes mensuales de salud</li>
            </ul>
            <div className="stack"><span className="pill">CDN</span><span className="pill">Caching</span><span className="pill">Analytics</span></div>
          </article>
        </div>
      </div>
    </section>
  )
}