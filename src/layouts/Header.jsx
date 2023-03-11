import Developer from '../assets/header_img.png'
import { Link } from 'react-scroll'
import useAuth from '../hooks/useAuth'
import ModalAdmin from '../components/ModalAdmin'

const Header = () => {
  const { modal, setModal, auth } = useAuth();

  return (
    <header id='home' className="flex items-center justify-center bg-header px-10 py-2.5 xl:px-32">
      <div className="grid grid-cols-1 mx-auto gap-3 md:grid-cols-2">
        <div className="text-white flex justify-center items-start flex-col mb-3">
          <h1 className='text-4xl my-4 uppercase sm:text-6xl'>Hola soy <strong> Lukas Martinez</strong></h1>
          <p className='text-2xl uppercase'><strong>junior web developer Full Stack</strong></p>
          <div className='py-3'>
            <Link 
              to="contact" 
              className="relative mr-6 inline-flex text-sm items-center justify-center w-25 px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group bg-gradient-to-br from-cyan-200 via-purple-400 to-fuchsia-400 sm:w-40"
              spy={true} 
              smooth={true} 
              offset={-78} 
              duration={500}
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative uppercase">Contáctame</span>
            </Link>
            <a href='./CV_Lukas_Martinez.pdf' className="relative inline-flex mt-3 text-sm items-center justify-center w-25 px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group sm:w-40" download>
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-cyan-200 via-purple-400 to-fuchsia-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative uppercase">Currículum</span>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center my-3">
          <img className='h-full w-full' src={Developer} />
          {auth.admin && (
            <>
              <button 
                className="floatting-btn"
                onClick={() => setModal(true)}
              >
                Registrar Admin
              </button>
              {modal && (
                <ModalAdmin />
              )}
            </>
          )}
        </div>
      </div> 
    </header>
  )
}

export default Header
