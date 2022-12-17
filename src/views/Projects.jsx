import Project from "../components/Project"
import Ecommerce from '../assets/projects/ecommerce.jpg'

const Projects = () => {
  return (
    <section className='py-8 px-6 bg-gray-900'>
      <div className="container flex items-center justify-center mx-auto flex-col">
        <h2 id="projects" className='text-5xl text-white font-bold mb-5 text-center sm:text-7xl'>Proyectos</h2>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Project image={Ecommerce} title='Itech - eCommerce' />
        </article>
      </div>
    </section>
  )
}

export default Projects