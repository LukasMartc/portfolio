import { useEffect, useState } from 'react'
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useAuth from "../hooks/useAuth"

const NavBar = () => {
    const [sticky, setSticky] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);

    const { auth } = useAuth();
    
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY >= 100);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    const scrollToTop = () => {
        Scroll.animateScroll.scrollToTop();
    }

    const handleSignOff = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <nav className={`relative flex items-center justify-between px-10 py-3 bg-gray-900 transition duration-700 ${sticky && 'sticky'} xl:px-32`}>
            <div className='container mx-auto flex flex-wrap items-center justify-between'>
                <div className={`w-full relative flex justify-between  ${auth.admin ? 'lg:w-auto lg:static lg:block lg:justify-start' : 'md:w-auto md:static md:block md:justify-start'}`}>
                    <a
                        className="flex text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase"
                        onClick={scrollToTop}
                    >
                        <img src={Logo} className="h-8 mr-3 sm:h-10" alt="Lukas Martinez" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap sm:text-2xl">LM</span>
                    </a>
                    <button
                        className={`text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block  outline-none focus:outline-none ${auth.admin ? 'lg:hidden' : 'md:hidden'}`}
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </button>
                </div>
                <div className={`flex-grow items-center ${auth.admin ? 'lg:flex' : 'md:flex'} ${navbarOpen ? "flex" : " hidden"}`}>
                    <ul className={`flex flex-col list-none ${auth.admin ? 'lg:ml-auto lg:flex-row' : 'md:ml-auto md:flex-row'}`}>
                        <li className="nav-item">
                            <Link
                                className="cursor-pointer ml-1 p-2 flex items-center text-base uppercase font-bold leading-snug text-slate-200 xl:ml-12 hover:text-white hover:bg-gray-700"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                                activeClass="active" 
                                to="home" 
                                spy={true} 
                                smooth={true} 
                                offset={-80} 
                                duration={500}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="cursor-pointer ml-1 p-2 flex items-center text-base uppercase font-bold leading-snug text-slate-200 xl:ml-12 hover:text-white hover:bg-gray-700"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                                activeClass="active" 
                                to="about-me" 
                                spy={true} 
                                smooth={true} 
                                offset={-78} 
                                duration={500}
                            >
                                Sobre Mí
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="cursor-pointer ml-1 p-2 flex items-center text-base uppercase font-bold leading-snug text-slate-200 xl:ml-12 hover:text-white hover:bg-gray-700"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                                activeClass="active" 
                                to="skills" 
                                spy={true} 
                                smooth={true} 
                                offset={-78} 
                                duration={500}
                                isDynamic={true}
                            >
                                Tecnologías
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="cursor-pointer ml-1 p-2 flex items-center text-base uppercase font-bold leading-snug text-slate-200 xl:ml-12 hover:text-white hover:bg-gray-700"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                                activeClass="active" 
                                to="projects" 
                                spy={true} 
                                smooth={true} 
                                offset={-78} 
                                duration={500}
                            >
                                Proyectos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className='cursor-pointer ml-1 p-2 flex items-center text-base uppercase font-bold leading-snug text-slate-200 xl:ml-12 hover:text-white hover:bg-gray-700'
                                onClick={() => setNavbarOpen(!navbarOpen)}
                                activeClass="active" 
                                to="contact" 
                                spy={true} 
                                smooth={true} 
                                offset={-78} 
                                duration={500}
                            >
                                Contacto
                            </Link>
                        </li>
                        {auth.admin && (
                            <button 
                                className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded ml-1 uppercase xl:ml-6"
                                onClick={handleSignOff}    
                            >
                                Cerrar Sesión
                            </button>
                        )}
                    </ul>
                </div>
            </div>
        </nav>   
  )
}

export default NavBar