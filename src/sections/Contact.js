import React from 'react'

function Contact() {
  return (
    <section id="contact" className="contact section dark-background">

      <div className="container section-title">
        <h2>Contacto</h2>
        <p>Contacto</p>
      </div>

      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <div className="info-item d-flex" >
              <i className="bi bi-envelope envlp"></i>
              <div className='table'>
                <h3>Email</h3>
                <table>
                  <tr>
                    <td className='rname'>Administración</td>
                    <td>admin@dacaing.com</td>
                  </tr>
                  <tr>
                    <td className='rname'>Dirección</td>
                    <td>saranieves@dacaing.com</td>
                  </tr>
                  <tr>
                    <td className='rname'>Proyectos</td>
                    <td>ezequielsolis@dacaing.com</td>
                  </tr>
                </table>
              </div>
            </div>
            </div>          

          <div className="col-lg-3">
            <div className="info-item d-flex" >
              <button><i class="bi bi-whatsapp"></i></button>
              <div className="d-flex align-items-center">
                <h3>WhatsApp</h3>
              </div>
            </div>
            </div>

          <div className="col-lg-3">
            <div className="info-item d-flex">
              <button><i className="bi bi-facebook"></i></button>
              <div className="d-flex align-items-center">
                <h3>Facebook</h3>
              </div>
            </div>
            </div>            


          </div>



        </div>

      

    </section>
  )
}

export default Contact