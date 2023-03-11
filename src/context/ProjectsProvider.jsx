import { useState, useEffect, createContext } from "react";
import clientAxios from "../config/ClientAxios";

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [alert, setAlert] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [project, setProject] = useState({});

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await clientAxios('/projects');
        setProjects(data);
      } catch (error) {
        console.log(error)
      }
    }
    getProjects();
  }, [])

  const showAlert = alert => {
    setAlert(alert)
    setTimeout(() => {
      setAlert({});
    }, 5000)
  }

  const closeModal = () => {
    setShowModal(false);
    setAlert({});
    setEdit(false);
    setProject({});
  }

  const openEditModal = project => {
    setShowModal(true);
    setEdit(true);
    setProject(project);
  }

  const submitProject = async project => {
    if(edit) {
      await editProject(project)
    } else {
      await newProject(project)
    }
  }

  const editProject = async project => {
    try {
      const token = localStorage.getItem('token');
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clientAxios.put(`/projects/${project.id}`, project, config);

      const updatedProjects = projects.map(projectState => projectState._id === data._id ? data : projectState);
      setProjects(updatedProjects);

      setAlert({
        msg: 'Proyecto actualizado correctamente',
        error: false
      })

      setTimeout(() => {
        closeModal()
      }, 3000)
    } catch (error) {
      console.log(error);
    }
  }

  const newProject = async project => {
    try {
      const token = localStorage.getItem('token');
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clientAxios.post('/projects', project, config);
      setProjects([...projects, data]);

      showAlert({
        msg: 'Projecto añadido correctamente',
        error: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  const deleteProject = async id => {
    try {
      const token = localStorage.getItem('token');
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clientAxios.delete(`/projects/${id}`, config);
      window.alert(data.msg);

      const updatedProjects = projects.filter(projectState => projectState._id !== id);
      setProjects(updatedProjects);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        showAlert,
        alert,
        showModal,
        setShowModal,
        closeModal,
        submitProject,
        openEditModal,
        project,
        edit,
        deleteProject
      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}

export { ProjectsProvider }

export default ProjectsContext