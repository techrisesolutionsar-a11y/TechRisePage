'use client'
import axios from "axios"

export default function Contact(){

  const submitForm = async e =>{
    const res = await axios.post(process.env.NEXT_PUBLIC_API)
    console.log(res.data)
  }

  return(
    //Contact
    <section id="contact" className="section">
      <div className="container contact">
        <div>
          <h2>Obten tu cotización GRATIS</h2>
          <p className="muted">Cuéntanos sobre tu proyecto y te responderemos con una propuesta.</p>

            <div className="htmlForm-row">
              <div>
                <label htmlFor="name">Nombre completo</label>
                <input id="name" name="name" type="text" minLength="5" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="example@email.com" required/>
              </div>
            </div>
            <div className="htmlForm-row">
              <div>
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input id="phone" name="phone" type="tel" placeholder="(+52) 55 0000 0000" inputMode="numeric" pattern="[0-9]+" minLength="10" required/>
              </div>
              <div>
                <label htmlFor="service">Servicio</label>
                <select id="service" name="service" style={{width:"100%",padding:".9rem 1rem",borderRadius:"12px",border:"1px solid #334155",background:"#0f172a",color:"white"}}>


      <option value="Web Development">Web Development</option>
      <option value="3D Modeling">3D Modeling</option>
      <option value="Computer Maintenance">Computer Maintenance</option>
      <option value="Website Maintenance">Website Maintenance</option>
    </select>
  </div>

            </div>
            <label htmlFor="message">Detalles del proyecto</label>
            <textarea id="message" name="message" placeholder="Escribe una breve descripcion de lo que necesitas..." required></textarea>
            <div style={{display:"flex",gap:".8rem",alignItems:"center",marginTop:".8rem"}}>
              <button type="submit" className="btn primary" onClick={submitForm}>Enviar solicitud</button>
              <a className="btn ghost" href="https://wa.me/5522172531" target="_blank" rel="noopener">Chat en WhatsApp</a>
            </div>
            <div className="success" id="successMsg" role="status">Thank you! We’ll get back to you shortly.</div>
          
        </div>
        <aside>
          <h2>Contacto</h2>
          <p className="muted">¿Prefieres el correo electrónico? Escríbenos y te responderemos en 1 o 2 días hábiles.</p>
          <ul style={{lineHeight:"2"}}>
            <li><b>Email:</b> <a href="mailto:techrisesolutionsar@gmail.com">techrisesolutionsar@gmail.com</a></li>
            <li><b>Phone:</b> <a href="tel:+5215522172531">(+52) 5522172531</a></li>
            <li><b>Horas:</b> Lunes – Viernes, 9:00 – 18:00</li>
            <li><b>Lugar:</b> Ciudad de México, CDMX (Remote & en sitio)</li>
          </ul>
          <div className="stack">
            <span className="pill">Español • English</span>
            <span className="pill">Facturacion disponible</span>
            <span className="pill">Apoyo de emergencia</span>
          </div>
        </aside>
      </div>
    </section>
  )
}