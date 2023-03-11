import { useState } from "react"
import Alert from "../components/Alert"
import clientAxios from "../config/ClientAxios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();

    if([name, email, subject, message].includes('')) {
      setAlert({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!regex.test(email)) {
      setAlert({
        msg: 'El correo es inválido',
        error: true
      })
      return
    }

    try {
      const { data }  = await clientAxios.post('/mail', { name, email, subject, message });
      setAlert({
        msg: data.msg
      })

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      setTimeout(() => {
        setAlert({})
      }, 8000)
    } catch (error) {
      console.log(error)
    }
    
  }

  const { msg } = alert;

  return (
    <section id="contact" className='container-contact px-10 py-14 xl:px-32'>
      <h2 className=' text-gray-900 text-3xl font-bold uppercase pb-2'>Contacto</h2>
      <p className='border-gray-900 border-t-4 w-16'></p>
      <div className="grid grid-cols-1 mx-auto gap-5 text-gray-900 mt-6 md:grid-cols-2">
        <div>
          <p className="text-gray-900 mb-6">
          Para cualquier duda, comentario o propuesta, puedes enviarme un mensaje a través del siguiente formulario. O puedes contactarme mediante de teléfono, WhatsApp, correo electrónico o LinkedIn.
          </p>
          <p className="text-gray-900 mb-2">
            <FontAwesomeIcon icon={faLocationDot} className='pr-2 text-base' />  
            Chillán, Chile.
          </p>
          <p className="text-gray-900 mb-2">
            <FontAwesomeIcon icon={faPhone} className='pr-2 text-base' />  
            +569 8757 2246
          </p>
          <p className="text-gray-900 mb-2">
            <FontAwesomeIcon icon={faEnvelope} className='pr-2 text-base' />  
            lukasmartinezc@gmail.com
          </p>
          <p className="text-gray-900 mb-2">
            <FontAwesomeIcon icon={faLinkedinIn} className='pr-2 text-base' />  
            linkedin.com/in/lukasmartinezc
          </p>
        </div>
        <div>
          {msg && <Alert alert={alert} />}
          <form 
            onSubmit={handleSubmit}
          >
            <div className="form-group mb-6">
              <input 
                type="text" 
                id="name" 
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-900 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Nombre"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-6">
              <input 
                type="email"
                id="email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-900 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Correo Electrónico"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-6">
              <input 
                type="text"
                id="subject"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-900 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Asunto"
                value={subject}
                onChange={e => setSubject(e.target.value)}
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                type='text'
                id='message'
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-900 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                rows='4'
                placeholder="Mensaje"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2.5 bg-gray-800 text-white font-medium text-sx leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact