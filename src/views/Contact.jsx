const Contact = () => {
  return (
    <section className='container-contact'>
      <div className="container flex items-center justify-center mx-auto flex-col">
        <h2 id="contact" className='text-5xl text-gray-900 font-bold mb-5 text-center sm:text-7xl'>Contacto</h2>
        <article className="my-6 w-full sm:w-4/6 ">
          <form>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex items-start justify-center flex-col">
                <label htmlFor="name" className="text-2xl text-gray-900 font-bold mb-2">Nombre</label>
                <input 
                  id="text" 
                  type="text"
                  placeholder="Juan Perez"
                  className="w-full h-11 rounded shadow-xl placeholder:px-2 text-lg "
                />
              </div>
              <div className="flex items-start justify-center flex-col">
                <label htmlFor="email" className="text-2xl text-gray-900 font-bold mb-2">Correo</label>
                <input 
                  id="email" 
                  type="email"
                  placeholder="ejemplo@ejemplo.com"
                  className="w-full h-10 rounded shadow-xl placeholder:px-2 text-lg"
                />
              </div> 
            </div>
            <div className="flex flex-col justify-center my-6">
              <label htmlFor="message" className="text-2xl text-gray-900 font-bold mb-2">
                Mensaje
              </label>
              <textarea 
                type='text'
                id='message'
                placeholder="Escribe tu mensaje acá ..."
                className="w-full h-36 rounded text shadow-xl placeholder:p-2 text-lg"
              />
            </div>
            <input 
              type='submit'
              className='bg-gray-800 w-full p-3 cursor-pointer rounded-xl text-white uppercase font-bold transition duration-700 ease-in-out hover:bg-gray-900 first-line:px-2'
              value='Enviar Mensaje'
            />
          </form>
        </article>
      </div>
    </section>
  )
}

export default Contact