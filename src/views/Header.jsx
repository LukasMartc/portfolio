import Developer from '../assets/header_img.png'

const Header = () => {
  return (
    <header className="bg-header px-6 py-2.5">
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2">
        <div className="text-white flex justify-center items-start flex-col mb-3">
          <h1 className='text-6xl my-4 sm:text-7xl'>Hola, mi <br />nombre es <strong>Lukas</strong></h1>
          <p className='text-lg'>Soy un <strong>desarrollador web Full Stack</strong> con conocimientos en el Stack MERN de Chillán, Chile</p>
          <a href="#contact" className='my-4 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500'>
            <span className='absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-200 via-purple-400 to-fuchsia-400'></span>
            <span className='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-purple-600 rounded-full opacity-30 group-hover:rotate-90 ease'></span>
            <span className='relative text-white'>Contáctame</span>
          </a>
        </div>
        <div className="flex justify-center items-center my-3">
          <img src={Developer} />
        </div>
      </div> 
    </header>
  )
}

export default Header
