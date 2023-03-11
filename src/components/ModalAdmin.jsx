import { Fragment, useState } from 'react';
import useAuth from '../hooks/useAuth'
import Alert from './Alert';
import clientAxios from '../config/ClientAxios';

const ModalAdmin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [alert, setAlert] = useState({});
  
  const { setModal } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();

    if([name, email, password, repeatPassword].includes('')) {
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

    if(password !== repeatPassword) {
      setAlert({
        msg: 'Las contraseñas no son iguales',
        error: true
      })
      return
    }

    if(password.length < 6) {
      setAlert({
        msg: 'Contraseña muy corta, agrega mínimo 6 caracteres',
        error: true
      })
      return
    }

    setAlert({});

    try {
      const token = localStorage.getItem('token');
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clientAxios.post('/user/new-admin', {name, email, password}, config);
      setAlert({
        msg: 'Administrador creado correctamente',
        error: false
      })

      setName('');
      setEmail('');
      setPassword('');
      setRepeatPassword('');

      setTimeout(() => {
        setAlert({});
        setModal(false);
      }, 3000)

    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alert;

  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-5">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold uppercase">
                Registrar Nuevo Administrador
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-gray-400 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setModal(false)}
              >
                <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
                          
              {msg && <Alert alert={alert} />}

              <form 
                className='px-5'
                onSubmit={handleSubmit}
              >
                <div className='mb-5'>
                  <label
                    className='textgray-700 uppercase font-bold text-sm'
                    htmlFor='admin-name'
                  >
                    Nombre
                  </label>
                  <input 
                    id='admin-name'
                    type='text'
                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='Lukas Martínez'
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className='mb-5'>
                  <label
                    className='textgray-700 uppercase font-bold text-sm'
                    htmlFor='admin-email'
                  >
                    Correo Electrónico
                  </label>
                  <input 
                    id='admin-email'
                    type='text'
                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='nombre@correo.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className='mb-5'>
                  <label
                    className='textgray-700 uppercase font-bold text-sm'
                    htmlFor='password'
                  >
                    Contraseña
                  </label>
                <input 
                    id='password'
                    type='password'
                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='••••••••'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className='mb-5'>
                  <label
                    className='textgray-700 uppercase font-bold text-sm'
                    htmlFor='repeat-password'
                  >
                    Repetir Contraseña
                  </label>
                <input 
                    id='repeat-password'
                    type='password'
                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='••••••••'
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-end pt-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModal(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Registrar Admin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Fragment>
  )
}

export default ModalAdmin