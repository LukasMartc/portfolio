import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import useProjects from "../hooks/useProjects"

const Project = ({ project, admin }) => {
  const { 
    name, 
    image, 
    technologies, 
    website, 
    frontend, 
    backend 
  } = project;

  const { openEditModal, deleteProject } = useProjects();

  const handleClick = () => {
    if (confirm('¿Deseas eliminar este proyecto?')) {
      deleteProject(project._id);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <figure className="box-image">
        <img className="img-projects" src={image} alt={name} />

        <div className="layer">
          <h3 className="text-white font-bold text-lg mb-2">
            {name}
          </h3>

          {technologies?.length > 0 && (
            <p className="text-white text-sm mb-2">
              <span className="font-semibold">Tecnologías:</span>{" "}
              {technologies.map(tech => tech.name).join(", ")}
            </p>
          )}

          <div className="w-full flex justify-around items-center text-white text-sm mt-3 gap-2 flex-wrap">
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 py-1 px-2 link"
              >
                <FontAwesomeIcon icon={faEarthAmericas} />
                <span className="pl-1">Website</span>
              </a>
            )}

            {frontend && (
              <a
                href={frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 py-1 px-2 link"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span className="pl-1">Frontend</span>
              </a>
            )}

            {backend && (
              <a
                href={backend}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 py-1 px-2 link"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span className="pl-1">Backend</span>
              </a>
            )}
          </div>

          {admin && (
            <div className="flex justify-center items-center mt-3">
              <button onClick={() => openEditModal(project)}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="pr-4 text-sky-500 hover:text-sky-700"
                />
              </button>

              <button onClick={handleClick}>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-red-500 hover:text-red-700"
                />
              </button>
            </div>
          )}
        </div>
      </figure>
    </div>
  );
};

export default Project;
