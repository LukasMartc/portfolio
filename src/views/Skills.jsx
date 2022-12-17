import Technology from "../components/Technology"
import HTML from '../assets/skills/html.png'
import CSS from '../assets/skills/css.png'
import Bootstrap from '../assets/skills/bootstrap.png'
import Tailwind from '../assets/skills/tailwindcss.png'
import MUI from '../assets/skills/mui.png'
import JavaScript from '../assets/skills/javascript.png'
import ReactLogo from '../assets/skills/react.png'
import NodeJs from '../assets/skills/nodejs.png'
import Express from '../assets/skills/express.png'
import NPM from '../assets/skills/npm.png'
import MongoDB from '../assets/skills/mongodb.png'
import Git from '../assets/skills/git.png'
import GitHub from '../assets/skills/github.png'
import Terminal from '../assets/skills/terminal.png'
import Netlify from '../assets/skills/netlify.png'
import Heroku from '../assets/skills/heroku.png'
import Cloudinary from '../assets/skills/cloudinary.png'
import Mailtrap from '../assets/skills/mailtrap.png'

const Skills = () => {
  return (
    <section className='py-8 px-6'>
      <div className="container flex items-center justify-center mx-auto flex-col">
        <h2 id="skills" className='text-5xl text-gray-900 font-bold mb-5 text-center sm:text-7xl'>Tecnologías</h2>
        <article className="grid grid-cols-4 mx-auto my-6 w-full gap-3 sm:grid-cols-6">
          <Technology image={HTML} dimensions='w-16 sm:w-24' />
          <Technology image={CSS} dimensions='w-16 sm:w-24' />
          <Technology image={Bootstrap} dimensions='w-20 sm:w-28' />
          <Technology image={Tailwind} dimensions='w-24 sm:w-32'/>
          <Technology image={MUI} dimensions='w-24 sm:w-32'/>
          <Technology image={JavaScript} dimensions='w-16 sm:w-24' />
          <Technology image={ReactLogo} dimensions='w-20 sm:w-28' />
          <Technology image={NodeJs} dimensions='w-16 sm:w-24' />
          <Technology image={Express} dimensions='w-20 sm:w-28' />
          <Technology image={NPM} dimensions='w-20 sm:w-28' />
          <Technology image={MongoDB} dimensions='w-10 sm:w-14'/>
          <Technology image={Cloudinary} dimensions='w-20 sm:w-28' />
          <Technology image={Mailtrap} dimensions='w-24 sm:w-32'/>
          <Technology image={Terminal} dimensions='w-20 sm:w-28' />
          <Technology image={Git} dimensions='w-20 sm:w-28'/>
          <Technology image={GitHub} dimensions='w-20 sm:w-28' />
          <Technology image={Netlify} dimensions='w-20 sm:w-28' />
          <Technology image={Heroku} dimensions='w-16 sm:w-24' />
        </article>
      </div>
    </section>
  )
}

export default Skills