import { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

const NavBar = () => {
    const [sticky, setSticky] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY >= 100);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <nav className={`relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 transition duration-700 ${sticky && 'sticky'}`}>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                    <a
                        className="flex text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white"
                        href="#"
                    >
                        <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Lukas Martinez" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">LM</span>
                    </a>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </button>
                </div>
                <div
                    className={
                        "md:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    >
                    <ul className="flex flex-col md:flex-row list-none md:ml-auto">
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-slate-200 hover:text-white"
                                href="#"
                            >
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-slate-200 hover:text-white"
                                href="#aboutMe"
                            >
                                Sobre Mí
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-slate-200 hover:text-white"
                                href="#skills"
                            >
                                Tecnologías
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-slate-200 hover:text-white"
                                href="#projects"
                            >
                                Proyectos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-slate-200 hover:text-white"
                                href="#contact"
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>   
  )
}

export default NavBar