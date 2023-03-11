import Me from '../assets/lukas.png';
import AboutMeCard from '../components/AboutMeCard'
import { faPersonHiking, faGamepad, faPlaneDeparture, faCat, faFilm, faUserClock, faPeopleGroup, faUserGear, faPersonChalkboard, faHammer } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
  return (
    <section id='about-me' className='bg-gray-900 px-10 py-14 xl:px-32'>
      <h2 className=' text-white text-3xl font-bold uppercase pb-2'>Sobre mí</h2>
      <p className='border-t-4 w-16'></p>
      <div className="grid grid-cols-1 mx-auto gap-5 text-white mt-6 md:grid-cols-2">
        <div>
          <p className='mb-4'>
            Hola! Mi nombre es Lukas Martínez, y soy un desarrollador web Full Stack con conocimientos en el Stack MERN. El mundo de la programación lo conocí debido a que buscaba un cambio en mi vida laboral, y puedo decir que es una de las mejores decisiones que he tomado, ya que es un área que de verdad me apasiona y me ha convertido en una persona con metas claras, cada día me levanto con las ganas de aprender temas nuevos, esto hace de mí una persona constante y curiosa. Actualmente, me encuentro en la búsqueda de mi primer trabajo dentro del mundo IT mientras sigo desarrollando mis conocimientos de manera autodidacta.
          </p>
          <p>
            Realicé el Bootcamp de programación de la Universidad del Desarrollo, Full Stack MERN. Pude realizar varios proyectos tanto de manera grupal como individual, respetando siempre los plazos de entrega y realizando reuniones de retroalimentación.
          </p>
          <div className="grid grid-cols-1 mx-auto gap-3 text-white mt-6 md:grid-cols-2">
            <AboutMeCard 
              title='Habilidades Blandas' 
              first='Responsabilidad'
              second='Trabajo en equipo'
              thrid='Adaptabilidad'
              fourth='Comunicación'
              fifth= 'Resolución de problemas'
              firstIcon={faUserClock}
              secondIcon={faPeopleGroup}
              thridIcon={faUserGear}
              fourthIcon={faPersonChalkboard}
              fifthIcon={faHammer}
               />
            <AboutMeCard
              title= 'Hobbies' 
              first='Trekking'
              second='Videojuegos'
              thrid='Viajar'
              fourth='Gatos'
              fifth='Peliculas, Series y Animes'
              firstIcon={faPersonHiking}
              secondIcon={faGamepad}
              thridIcon={faPlaneDeparture}
              fourthIcon={faCat}
              fifthIcon={faFilm}
               />
          </div>
        </div>
        <div className='max-h-80'>
          <div className='box-img-me relative w-80 h-80 max-w-full rounded-lg shadow-2xl overflow-hidden'>
            <img className='mix-blend-overlay bg-gray-400 inset-0 w-full h-full object-cover relative z-10' src={Me} />
          </div>
          <div className='box-shadow-me'></div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe