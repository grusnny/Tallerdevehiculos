import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Plomería</h4>
                            <p>Estamos para atender tus emergencias las 24 horas del día, garantizando con nuestra experiencia, tecnología y conocimiento la mejor alternativa para dar solución a tus problemas de Plomería. Nuestros técnicos están debidamente uniformados y correctamente identificados, con seguridad social al día (ARL y EPS).</p>
                            <p><a href="/">Saber más</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Albañilería</h4>
                            <p>La calidad es el sello de nuestra empresa; Una empresa que se ha posicionado en el mercado con lo mejor en reparaciones y renovaciones locativas, que le brinda a sus clientes garantía, ejecución limpia y profesionales uniformizados y constantemente entrenados.</p>
                            <p><a href="/">Saber más</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                     <div className="card-content">
                        <div className="content">
                            <h4>Carpintería</h4>
                            <p>Somos un directorio especializado en buscar, clasificar y seleccionar los mejores carpinteros en tu Ciudad. También encontraras carpinterías especializados en reparaciones de carpintería a domicilio y diseño de muebles.</p>
                            <p><a href="/">Saber más</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
