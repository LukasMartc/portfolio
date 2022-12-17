import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const AboutMeCard = ({ tag, icon }) => {
  return (
    <div className={`p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700 ${tag === "intro" && 'col-span-2'} ${tag === "formation" && 'col-span-2 lg:col-span-1'} ${tag === "softSkills" && 'col-span-2 sm:col-span-1'} ${tag === "hobbies" && 'col-span-2 sm:col-span-1'}`}>
      <div className='flex justify-between items-center'>
        {tag === "intro" && (
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Introducción
          </h5>
        ) || tag === "formation" && (
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Formación
          </h5>
        ) || tag === "softSkills" && (
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Habilidades Blandas
          </h5>
        ) || tag === "hobbies" && (
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Hobbies
          </h5>
        )}
        <FontAwesomeIcon icon={icon} className='text-purple-300 text-xl' />
      </div>
      {tag === "intro" && (
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Mi nombre es Lukas Martínez, y soy un desarrollador web Full Stack con conocimientos en el Stack MERN. El mundo de la programación lo conocí debido a que buscaba un cambio en mi vida laboral, y puedo decir que es una de las mejores decisiones que he tomado, ya que es un área que de verdad me apasiona y me ha convertido en una persona con metas claras, cada día me levanto con las ganas de aprender temas nuevos, esto hace de mí una persona constante y curiosa. Actualmente, me encuentro en la búsqueda de mi primer trabajo dentro del mundo IT mientras sigo desarrollando mis conocimientos de manera autodidacta.
        </p>
      ) || tag === "formation" && (
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Realicé el Bootcamp de programación de la Universidad del Desarrollo, Full Stack MERN, en donde trabajamos utilizando metodología Agile/Scrum. Pude realizar varios proyectos tanto de manera grupal como individual, respetando siempre los plazos de entrega y realizando reuniones de retroalimentación.
        </p>
      ) || tag === "softSkills" && (
        <ul className="mb-3 font-normal text-gray-500 dark:text-gray-400 leading-8">
          <li>
            <FontAwesomeIcon icon={faCircle} className='text-xs pr-1' /> Responsabilidad
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} className='text-xs pr-1' /> Trabajo en equipo
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} className='text-xs pr-1' /> Adaptabilidad
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} className='text-xs pr-1' /> Organización
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} className='text-xs pr-1' /> Trabajo bajo presión
          </li>
        </ul>
      ) || tag === "hobbies" && (
        <ul className="mb-3 font-normal text-gray-500 dark:text-gray-400 leading-8">
          <li>
            <FontAwesomeIcon icon={faCircle} className='text-xs pr-1' /> Trekking
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} className='text-xs pr-1' /> Gym
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} className='text-xs pr-1' /> Videojuegos
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} className='text-xs pr-1' /> Viajar
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} className='text-xs pr-1' /> Gatos
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} className='text-xs pr-1' /> Peliculas, Series y Animes
          </li>
        </ul>
      )}         
    </div>
  )
}

export default AboutMeCard