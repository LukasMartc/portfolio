import Project from "../components/Project"
import Ecommerce from '../assets/projects/ecommerce.jpg'
import Landpage from '../assets/projects/landpage.jpg'
import Crud from '../assets/projects/crud.jpg'
import LandpageTravel from '../assets/projects/landing_viajes.jpg'

const Projects = () => {
  return (
    <section className='py-8 px-6 bg-gray-900'>
      <div className="container flex items-center justify-center mx-auto flex-col">
        <h2 id="projects" className='text-5xl text-white font-bold mb-5 text-center sm:text-7xl'>Proyectos</h2>
        <article className="grid grid-cols-1 w-11/12 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
          <Project 
            image={Ecommerce} 
            title='Itech - eCommerce' 
            technologies='Tecnologías - React, Node Js, Express, MongoDB, Material UI, Mailtrap y Cloudinary' 
            website='https://relaxed-praline-db38a0.netlify.app/'
            frontend='https://github.com/LukasMartc/eCommerceMERN_frontend'
            backend='https://github.com/LukasMartc/eCommerceMERN_backend'
            fullStack={true}
          />
          <Project 
            image={Landpage} 
            title='Café Recontre' 
            technologies='Tecnologías - React, CSS, Bootstrap, react-host-toast y Firebase' 
            website='https://superlative-nasturtium-841623.netlify.app/'
            repository='https://github.com/LukasMartc/proyecto-cafeteria'
            fullStack={false}
          />
          <Project 
            image={Crud} 
            title='Market - Inventario y Stock' 
            technologies='Tecnologías - HTML, CSS, Bootstrap y JavaScript' 
            website='https://lukasmartc.github.io/'
            repository='https://github.com/LukasMartc/LukasMartc.github.io'
            fullStack={false}
          />
          <Project 
            image={LandpageTravel} 
            title='Viajes Itour' 
            technologies='Tecnologías - HTML, CSS y Bootstrap' 
            website='https://astounding-souffle-3d70f4.netlify.app/'
            repository='https://github.com/LukasMartc/Proyecto1_LandingDeVenta'
            fullStack={false}
          />
        </article>
      </div>
    </section>
  )
}

export default Projects