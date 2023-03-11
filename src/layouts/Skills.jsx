import { useState } from "react"
import Technology from "../components/Technology"
import Frontend from '../assets/skills/frontend.svg'
import Backend from '../assets/skills/backend.svg'
import Others from '../assets/skills/others.svg'
import useSkills from "../hooks/useSkills"
import useAuth from "../hooks/useAuth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from "../components/Modal"

const Skills = () => {
  const { skills, showModal, setShowModal } = useSkills();
  const { auth } =  useAuth();

  const skillsFrontend = skills.filter(skill => skill.category === 'frontend');
  const skillsBackend = skills.filter(skill => skill.category === 'backend');
  const skillsOthers = skills.filter(skill => skill.category === 'others');

  return (
    <section id="skills" className='bg-gray-900 px-10 py-14 xl:px-32'>
      <div className={auth.admin && 'flex justify-between items-center'}>
        <div>
          <h2 className=' text-white text-3xl font-bold uppercase pb-2'>Tecnologías</h2>
          <p className='border-t-4 w-16'></p>
        </div>
        {auth.admin && (
          <button 
            type='button'
            className="rounded-3xl bg-green-500 flex items-center justify-center w-10 h-10 hover:bg-green-700"
            onClick={() => setShowModal(true)}  
          >
            <FontAwesomeIcon icon={faPlus} className='text-white' />
          </button>
        )}
        {showModal && (
          <Modal />
        )}
      </div>
      <p className="text-white mt-6">
        Estoy emocionado de dar el salto y continuar perfeccionando mis habilidades con la compañía adecuada. <br /> A continuación se muestra una descripción general rápida de mis principales conjuntos de habilidades técnicas y herramientas que utilizo.
      </p>
      <div className="flex justify-center items-center container mx-auto">
        <div className="grid grid-cols-1 mx-auto gap-5 text-white lg:grid-cols-3">
          <Technology title='Frontend' icon={Frontend} skills={skillsFrontend} />
          <Technology title='Backend' icon={Backend} skills={skillsBackend} />
          <Technology title='Otros' icon={Others} skills={skillsOthers} />
        </div>
      </div>
    </section>
  )
}

export default Skills