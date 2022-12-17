import { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Project = ({ image, title, technologies, website, frontend, backend, repository, fullStack }) => {
  return (
    <div className='flex items-center justify-center'>
        <figure className='box-image'>
            <img className="img-projects" src={image} />
            <div className="layer">
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-white text-sm">{technologies}</p>
                <div className="w-full flex justify-around items-center text-white text-sm mt-3">
                    {fullStack ? (
                        <Fragment>
                            <a href={website} target='_blank' className="bg-stone-900 py-1 px-2 link">
                                <FontAwesomeIcon icon={faEarthAmericas} />
                                <span className="pl-1">
                                    Website
                                </span>
                            </a>
                            <a href={frontend} target='_blank' className="bg-stone-900 py-1 px-2 link">
                                <FontAwesomeIcon icon={faGithub} />
                                <span className="pl-1 p-1">
                                    Frontend
                                </span>
                            </a>
                            <a href={backend} target='_blank' className="bg-stone-900 py-1 px-2 link">
                                <FontAwesomeIcon icon={faGithub} />
                                <span className="pl-1">
                                    Backend
                                </span>
                            </a>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <a href={website} target='_blank' className="bg-stone-900 py-1 px-2 link">
                                <FontAwesomeIcon icon={faEarthAmericas} />
                                <span className="pl-1">
                                    Website
                                </span>
                            </a>
                            <a href={repository} target='_blank' className="bg-stone-900 py-1 px-2 link">
                                <FontAwesomeIcon icon={faGithub} />
                                <span className="pl-1">
                                    Repositorio
                                </span>
                            </a>
                        </Fragment>
                    )}
                </div>
            </div>
        </figure>
    </div>
  )
}

export default Project