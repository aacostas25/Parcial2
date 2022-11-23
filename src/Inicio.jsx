import React from 'react'
import imagen1 from './images/1.png'
import imagen2 from './images/2.png'
import imagen3 from './images/3.png'
import Carousel from 'react-bootstrap/Carousel'

export default function Inicio() {
  return (
<div className="container text-center">
  <div className="row">
  <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="Logo de la marca"
        />
        <Carousel.Caption>
          <h3>Marac Bookworms</h3>
          <p>Nombre de la marca.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Que significa"
        />

        <Carousel.Caption>
          <h3>¿Que es Bookworm?</h3>
          <p>Persona que ama locamente la lectura.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Inspirado en nuestros nombres"
        />

        <Carousel.Caption>
          <h3>Inspirado en nuestros nombres</h3>
          <p>
            Estamos inspirados en los nombres de nuestras creadoras.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
</div>
  )
}
