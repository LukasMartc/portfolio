const Project = ({ image, title }) => {
  return (
    <div className='container'>
        <figure className='box-image'>
            <img className="img-projects" src={image} />
            <div className="layer">
                <h3 className="text-white font-bold">{title}</h3>
                <p></p>
                <div>

                </div>
            </div>
        </figure>
    </div>
  )
}

export default Project