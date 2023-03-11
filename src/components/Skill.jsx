import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import useAuth from "../hooks/useAuth";
import useSkills from '../hooks/useSkills'

const Skill = ({ skill }) => {
  const { auth } =  useAuth();
  const { openEditModal, deleteSkill } = useSkills();

  const handleClick = () => {
    if(confirm('¿Deseas eliminar esta habilidad?')) {
      deleteSkill(skill._id)
    } 
  }

  return (
    <li className='uppercase'>
      <div className="flex justify-between items-center">
        <a href={skill.link} target='_blank' className='flex justify-start items-center'>
            <img src={skill.image} alt={skill.name} width='30px' height='30px' className="pr-3"/> 
            <span>{skill.name}</span>
        </a>
        {auth.admin && (
          <div>
            <button
              onClick={() => openEditModal(skill)}
            >
              <FontAwesomeIcon icon={faPenToSquare} className='pr-4 text-sky-500 hover:text-sky-700' />
            </button>
            <button
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faTrash} className='text-red-500 hover:text-red-700' />
            </button>
          </div>
        )}
      </div>
    </li>
  )
}

export default Skill