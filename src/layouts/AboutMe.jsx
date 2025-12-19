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
            Hola, mi nombre es Lukas Martínez y soy Analista Programador con enfoque en desarrollo Full Stack, utilizando tecnologías como React, Node.js, Express, Django, MongoDB y MySQL. Llegué al mundo de la programación buscando un cambio en mi vida laboral y hoy puedo decir que ha sido una de las mejores decisiones que he tomado, ya que encontré un área que realmente me motiva y desafía constantemente. Me caracterizo por ser una persona constante, curiosa y orientada al aprendizaje continuo, con interés en construir soluciones reales y bien estructuradas. Actualmente me encuentro en la búsqueda de mi primer desafío profesional en el área TI, mientras continúo fortaleciendo mis conocimientos a través de proyectos personales y estudio autodidacta.
          </p>
          <p>
            Soy Ingeniero en Telecomunicaciones, Conectividad y Redes, formación que me entregó una base sólida en tecnología y resolución de problemas, aunque decidí reorientar mi carrera profesional hacia el desarrollo de software. Posteriormente realicé el Bootcamp de Programación Full Stack MERN de la Universidad del Desarrollo, donde desarrollé diversos proyectos tanto de forma individual como grupal, cumpliendo plazos de entrega y participando activamente en instancias de retroalimentación y trabajo colaborativo. Actualmente, acabo de finalizar la carrera de Analista Programador en INACAP, fortaleciendo mis conocimientos en desarrollo backend y frontend, bases de datos y buenas prácticas de programación, y consolidando mi perfil para desempeñarme profesionalmente en el área TI.
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