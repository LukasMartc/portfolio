import Icon from "./Icon"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <footer className="bg-white border-gray-200 p-4 dark:bg-gray-900">
        <div className="container flex items-center justify-center flex-col mx-auto">
            <div className="flex items-center justify-around mx-auto w-36 my-3">
                <Icon icon={faLinkedinIn} link='https://www.linkedin.com/in/lukas-mart%C3%ADnez-carrasco-981851128/' />
                <Icon icon={faEnvelope} link='mailto:lukasmartinezc@gmail.com' />
                <Icon icon={faGithub} link='https://github.com/LukasMartc' />
            </div>
            <div className="text-white text-sm text-center mb-3 sm:text-base">
                <p>Lukas Martínez - © Todos los derechos reservados</p>
            </div>
        </div> 
    </footer>
  )
}

export default Footer