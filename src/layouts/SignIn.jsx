import { useState } from 'react'
import { Link } from 'react-router-dom'
import clientAxios from '../config/ClientAxios'
import Alert from '../components/Alert'
import Logo from '../assets/logo.png'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({});

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    if([email, password].includes('')) {
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
      const { data } = await clientAxios.post('/user/login', { email, password });
      setAlert({});
      localStorage.setItem('token', data.token);
      setAuth(data);
      navigate('/');
      window.location.reload();
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alert;

  return (
    <main className='bg-gray-200'>
        <div className='px-10 py-3 xl:px-32 bg-gray-900'>
            <Link to="/" className="flex text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase w-20 md:w-24">
                <img src={Logo} className="h-8 mr-3 sm:h-10" alt="Lukas Martinez" />
                <span className="self-center text-xl font-semibold whitespace-nowrap sm:text-2xl">LM</span>    
            </Link>
        </div>
        <div className='container mx-auto flex items-center justify-center'>
          <div className='py-20 px-2 md:px-0 md:w-2/3 lg:w-2/5'>
            <h1 className={`text-sky-600 font-black text-4xl capitalize md:text-6xl ${msg && 'mb-6'}`}> 
              Inicia sesión solo como
              <span className='text-slate-700'> administrador</span>
            </h1>

            {msg && <Alert alert={alert} />}

            <form 
              className='my-10 bg-white shadow rounded-lg p-10'
              onSubmit={handleSubmit}
            >
              <div className='my-5'>
                <label 
                  className='uppercase text-gray-600 block text-xl font-bold'
                  htmlFor='email'  
                >
                  Correo Electrónico
                </label>
                <input 
                  id='email'
                  type='email' 
                  placeholder='nombre@correo.com'
                  className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className='my-5'>
                <label 
                  className='uppercase text-gray-600 block text-xl font-bold'
                  htmlFor='password'  
                >
                  Contraseña
                </label>
                <input 
                  id='password'
                  type='password' 
                  placeholder='••••••••'
                  className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit" 
                value='Iniciar Sesión'
                className='bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
              />
            </form>
            <nav className='lg:flex lg:justify-center'>
              <Link
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to='/'
              >
                ¿No eres administrador? Vuelve al Home
              </Link>
            </nav>
          </div>

        </div>
        {/* <div className="grid grid-cols-1 mx-auto md:grid-cols-2 px-3 py-14 xl:px-32 md:h-[calc(100vh-208px)]">
            <RedirectHome />
            <FormLogin />
        </div> */}
    </main>
  )
}

export default SignIn