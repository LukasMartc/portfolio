import useAuth from '../hooks/useAuth'
import useProjects from "../hooks/useProjects"
import Project from "../components/Project"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ModalProjects from '../components/ModalProjects'

const Projects = () => {
  const { auth } = useAuth();
  const { projects, loading, showModal, setShowModal } = useProjects();

  return (
    <section id="projects" className='bg-gray-900 px-10 py-14 xl:px-32'>
      <div className={auth.admin && 'flex justify-between items-center'}>
        <div>
          <h2 className=' text-white text-3xl font-bold uppercase pb-2'>Proyectos</h2>
          <p className='border-t-4 w-16'></p>
        </div>
        {auth.admin && (
          <button 
            className="rounded-3xl bg-green-500 flex items-center justify-center w-10 h-10 hover:bg-green-700"
            onClick={() => setShowModal(true)}  
          >
            <FontAwesomeIcon icon={faPlus} className='text-white' />
          </button>
        )}
        {showModal && (
          <ModalProjects />
        )}
      </div>
      <div className="container flex items-center justify-center mx-auto mt-6 flex-col">
        <article className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading ? (
            [...Array(3)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-gray-800 h-56 rounded-xl"
              />
            ))
          ) : (
            projects.map(project => (
              <Project 
                key={project._id}
                project={project}
                admin={auth.admin}
              />
            ))
          )}
        </article>


      </div>
    </section>
  )
}

export default Projects