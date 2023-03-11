import { useState, useEffect } from 'react'
import {Fragment} from 'react'
import useSkills from '../hooks/useSkills';
import Alert from './Alert';

const Modal = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [link, setLink] = useState('');
    
  const { alert, showAlert, submitSkill, edit, tech, closeModal } = useSkills();

  useEffect(() => {
    if(edit) {
      setId(tech._id)
      setName(tech.name);
      setImage(tech.image)
      setCategory(tech.category)
      setLink(tech.link)
    } 
  }, [edit])

  const handleSubmit = async e => {
    e.preventDefault()

    if([name, image, category, link].includes('')) {
      showAlert({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    await submitSkill({id, name, image, category, link});

    setId(null);
    setName('');
    setImage('');
    setCategory('');
    setLink('');
  }

  const { msg } = alert;

  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-5">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold uppercase">
                {edit ? 'Editar Tecnología' : 'Anadir Nueva Tecnología'}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-gray-400 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => closeModal()}
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
                    htmlFor='name'
                  >
                    Nombre Tecnología
                  </label>
                  <input 
                    id='name'
                    type='text'
                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='Nombre de la Tecnología'
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className='mb-5'>
                  <label
                    className='textgray-700 uppercase font-bold text-sm'
                    htmlFor='category'
                  >
                    Categoría
                  </label>
                  <select 
                    id='category'
                    type='text'
                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='Nombre de la Tecnología'
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                  >
                    <option value="">-- Seleccione --</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="others">Otras</option>
                  </select>
                </div>
                <div className='mb-5'>
                  <label
                    className='textgray-700 uppercase font-bold text-sm'
                    htmlFor='image'
                  >
                    Imagen
                  </label>
                  <input 
                    id='image'
                    type='text'
                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='URL logo de la Tecnología'
                    value={image}
                    onChange={e => setImage(e.target.value)}
                  />
                </div>
                <div className='mb-5'>
                  <label
                    className='textgray-700 uppercase font-bold text-sm'
                    htmlFor='link'
                  >
                    Website Docs
                  </label>
                <input 
                    id='link'
                    type='text'
                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='URL Docs de la Tecnología'
                    value={link}
                    onChange={e => setLink(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-end pt-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => closeModal()}
                  >
                    Cerrar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    {edit ? 'Actualizar' : 'Guardar'}
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

export default Modal