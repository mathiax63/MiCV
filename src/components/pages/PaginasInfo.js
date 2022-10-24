import React from 'react'

export const PaginasInfo = () => {
  return (
    <div>
        <div className='proyectosDetalles'>
        <img src="./img/Img ronin.png" className='imgDetallesDeProyecto' />
     <section className='sectionDePaginasDetealles'><article  className='detallesDeInformacionDeProyecto'>
        <h2>detalles</h2>
        <h3>Academia</h3>
        <p>Digital House</p>
        <h3>Descripcion</h3>
        <p>Curso intensivo de 6 meses de duracion </p>
        <h3>Participantes</h3>
        <p>4</p>
        <h3>Fecha de inicio y cierre</h3>
        <p> 02/02/2021 - 12/08/2021</p>
        <h3>GitHub</h3>
        <a href='https://github.com/Lukendziur/sprint8_grupo9'>https://github.com/Lukendziur/sprint8_grupo9</a>
        </article><div className="divDeBotonRegreso">
        <a className='botonRegreso' href='/'>Volver al menu</a></div>
        </section>
     </div>
     </div>
  )
}

export default PaginasInfo