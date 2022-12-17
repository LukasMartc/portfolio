import Me from '../assets/aboutme_img.png'
import AboutMeCard from '../components/AboutMeCard'
import { faPersonChalkboard, faGraduationCap, faBrain, faGamepad } from '@fortawesome/free-solid-svg-icons'

const AboutMe = () => {
  return (
    <section className='py-8 px-6'>
      <div className="container flex items-center justify-center mx-auto flex-col">
        <h2 id='aboutMe' className='text-5xl text-gray-900 font-bold mb-5 text-center sm:text-7xl'>Sobre Mí</h2>
        <article className='grid grid-cols-1 mx-auto my-6 w-full gap-3 lg:grid-cols-3 sm:grid-cols-2'>
          <div className='col-span-2 w-full flex items-center justify-center lg:col-span-1'>
            <div className='bg-gray-900 w-64 rounded-full p-4 flex items-center justify-center'>
              <img src={Me} height='250px' width='164px' />
            </div>
          </div>
          <AboutMeCard tag="intro" icon={faPersonChalkboard}/>
          <AboutMeCard tag="formation" icon={faGraduationCap} />
          <AboutMeCard tag="softSkills" icon={faBrain} />
          <AboutMeCard tag="hobbies" icon={faGamepad} />
        </article>
      </div>
    </section>
  )
}

export default AboutMe