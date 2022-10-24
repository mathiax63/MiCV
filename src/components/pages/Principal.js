import React from 'react'

export const Principal = () => {
  return (
    <div>



    

    <main>
        <div>
            <div class="imagenMasPresentacion">
                <img class="imgCara" src="./img/Sin título.png"/>
                <p>Hola soy Mathias Reid tengo 21 años, estudio Desarrollo Web Full Stack, no tengo experiencia laboral
                    pero si academica, con ganas de trabajar y desarollarme en el mundo laboral de la programacion, soy
                    de Zelaya en pilar, siempre me intereso la programacion
                    , me empeze a formar hace un año y actualmente continuo mi estoduion en cursos de programacion </p>
            </div>
            <h2>Fecha de nacimiento</h2>
            <p>30/10/2000</p>

            <h2>Gustos</h2>
            <ul>
                <li>
                    <p>el deporte</p>
                </li>
                <li>
                    <p>Salir a caminar en la semana</p>
                </li>
                <li>
                    <p>Musica</p>
                </li>
            </ul>

            <h2>Domicilio</h2>
            <p> Pedro Carrión 480, Zelaya, Provincia de Buenos Aires</p>

            <h2>Mis proyectos pasados</h2>

            <section className='proyectosGeneral' >


                <article className='proyectos'><a className='aProyectos' href="./PaginasInfo"><img class="imgPaginas" src="./img/Img ronin.png"
                        alt=""/></a>
                    <aside>Proyecto Digital House</aside>
                </article>

                <article className='proyectos'><a className='aProyectos' href="https://github.com/mathiax63/parcial-UTN"><img class="imgPaginas" src="./img/GlobeLifepngEdit.png"
                            alt=""/></a>
                    <aside>Proyecto Curso JavaScript UTN</aside>
                </article>

                <article className='proyectos'><a className='aProyectos' href="https://github.com/mathiax63/MB"><img class="imgPaginas" src="./img/MateoB.png" alt=""/></a>
                    <aside>Proyecto Portafolio</aside>
                </article>

                <article className='proyectos'><a className='aProyectos' href="https://github.com/mathiax63/UTN-Full-Stack"><img class="imgPaginas" src="./img/MateoB.png" alt=""/></a>
                    <aside>Proyecto Portafolio</aside>
                </article>



            </section>
            <h2>Diplomas</h2>
            <section className='diplomas'>
                
                <article className='proyectos'><a className='aProyectos' href="https://github.com/mathiax63/UTN-Full-Stack"><img class="imgPaginas" src="./img/MateoB.png" alt=""/></a>
                    <aside>Proyecto Portafolio</aside>
                </article>
                <article className='proyectos'><a className='aProyectos' href="https://github.com/mathiax63/parcial-UTN"><img class="imgPaginas" src="./img/GlobeLifepngEdit.png"
                            alt=""/></a>
                    <aside>Proyecto Curso JavaScript UTN</aside>
                </article>

                <article className='proyectos'><a className='aProyectos' href="https://github.com/mathiax63/MB"><img class="imgPaginas" src="./img/MateoB.png" alt=""/></a>
                    <aside>Proyecto Portafolio</aside>
                </article>
            </section>

        </div>

    </main>
</div>
  )
}

export default Principal