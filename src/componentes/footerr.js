import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <section className="sect1_footer_inf text-white mt-3 text-dark">
            <div id="footer_inf1">
                <h2 className="txt-inf"> Nosotros </h2>
                <p className="txt-inf">SOMOS UN EQUIPO MULTIDISCIPLINARIO DE PERSONAL DE LA SALUD, ENFOCADOS EN LA ATENCION DE PACIENTES CON PIE DIABETICO
                        </p>
                <Link to={'/Terminos'} className="txt-inf" id="terminos-condiciones">Terminos y condiciones</Link>
                <br/>
                <Link to={'/Privacidad'} className="txt-inf" id="terminos-condiciones">Politicas de privacidad</Link>
                <br/>
                <Link to={'/Cookies'} className="txt-inf" id="terminos-condiciones">Politicas de cookies</Link>
            </div>

            <div id="footer_inf2">
                <h2 className="txt-inf">Contactos</h2>
                <p className="txt-inf"><i className="fa-solid fa-phone  rs-icons"></i>77 11443040</p>
                <p className="txt-inf"><i className="fa-solid fa-envelope  rs-icons"></i>Lorem ipsum dolor sit amet consectetur</p>
                <div className="txt-inf ">
                    <a href="https://wa.me/547711443040"><i className="fa-brands fa-whatsapp rs-icons  "></i></a>
                    <img src="" alt="" width="75px" height="75px" />
                </div>

            </div>

        </section>
        <section className="sect2_footer">
            <p>2023 Copyright CirupieD</p>
        </section>
    </div>
  )
}
