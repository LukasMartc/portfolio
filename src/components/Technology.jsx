const Technology = ({ image, dimensions }) => {
  return (
    <div className='col-span-2 w-full flex items-center justify-center lg:col-span-1'>
        <div className='dimension-height bg-gray-900 w-32 rounded-full p-4 flex items-center justify-center sm:w-40 '>
            <img src={image} className={dimensions} />
        </div>
    </div>
  )
}

export default Technology