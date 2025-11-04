'use client'
import axios from "axios"
import { useState } from "react"

export default function Contact(){

  const [loading, useLoading] = useState(false)
  const [success, useSuccess] = useState(false)
  const [error, useError] = useState(false)
  const [warning, useWarning] = useState(false)
  const [form, useForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'WebDevelopment',
    details: ''
  })

  const submitForm = async () =>{
    console.log(form);
    if(form.name == '' || form.email == '' || form.phone == '' || form.service == '' || form.details == ''){
      useWarning(!warning)
    }else{
      useLoading(!loading)
      console.log(form);
      const res = await axios.post(process.env.NEXT_PUBLIC_API, JSON.stringify(form),{
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(res.data)
      useLoading(false)
      console.log(res.data.status);
      
      if (res.data.status == true){
        useSuccess(!success)
        setTimeout(() => {
          useSuccess(false)
        }, 3000);
      }else {
        useError(!error)
        setTimeout(() => {
          useError(false)
        }, 3000);
      }
    }
  }

  return(
    //Contact
    <section id="contact" className="section">
      <div className="container contact">
        <div>
          <h2>Obten tu cotización GRATIS</h2>
          <p className="muted">Cuéntanos sobre tu proyecto y te responderemos con una propuesta.</p>
          {success && <div className="modal modal-success">
            <h3>Correo envíado éxitosamente.</h3>
            <p>Hemos recibido tú mensaje, nos pondremos en contacto contigo a la brevedad.</p>
          </div>}
          {error && <div className="modal modal-error">
            <h3>Fallo al envíar correo.</h3>
            <p>Lo sentimos, no se pudo envíar el corre, intenta en un rato más o contactanos a través del boton de WhatsApp.</p>
          </div>}
          {warning && <div className="modal modal-warning">
            <h3>Datos erroneos.</h3>
            <p>Revisa bien los datos ingresados en el formulario.</p>
          </div>}
            <div className="htmlForm-row">
              <div>
                <label htmlFor="name">Nombre completo</label>
                <input id="name" name="name" type="text" minLength="5" placeholder="Your name" value={form.name} onChange={e => useForm({...form, name: e.target.value})}/>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="example@email.com" required
                value={form.email} onChange={e => useForm({...form, email: e.target.value})}/>
              </div>
            </div>
            <div className="htmlForm-row">
              <div>
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input id="phone" name="phone" type="tel" placeholder="(+52) 55 0000 0000" inputMode="numeric" pattern="[0-9]+" minLength="10" required onChange={e => useForm({...form, phone: e.target.value})} value={form.phone}/>
              </div>
              <div>
                <label htmlFor="service">Servicio</label>
                <select id="service" name="service" style={{width:"100%",padding:".9rem 1rem",borderRadius:"12px",border:"1px solid #334155",background:"#0f172a",color:"white"}} value={form.service} onChange={e => useForm({...form,service: e.target.value})}>
              <option value="WebDevelopment">Web Development</option>
              <option value="3DModeling">3D Modeling</option>
              <option value="ComputerMaintenance">Computer Maintenance</option>
              <option value="WebsiteMaintenance">Website Maintenance</option>
            </select>
          </div>

            </div>
            <label htmlFor="message">Detalles del proyecto</label>
            <textarea id="message" name="message" placeholder="Escribe una breve descripcion de lo que necesitas..." value={form.details} required onChange={e => useForm({...form, details: e.target.value})}></textarea>
            <div style={{display:"flex",gap:".8rem",alignItems:"center",marginTop:".8rem"}}>
              <button type="submit" className="btn primary" onClick={submitForm} disabled={loading}>{loading ? <>Enviando correo...<span className="loader"></span></>: "Enviar solicitud"}</button>
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