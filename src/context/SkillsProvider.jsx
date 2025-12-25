import { useState, useEffect, createContext } from "react"
import clientAxios from "../config/ClientAxios"

const SkillsContext = createContext();

const SkillsProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const [alert, setAlert] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [tech, setTech] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const { data } = await clientAxios('/technology');
        setSkills(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getSkills();
  }, []);

  const showAlert = alert => {
    setAlert(alert)
    setTimeout(() => {
      setAlert({});
    }, 5000)
  }

  const closeModal = () => {
    setShowModal(false)
    setAlert({})
    setEdit(false)
    setTech({})
  }

  const openEditModal = skill => {
    setShowModal(true)
    setEdit(true)
    setTech(skill)
  }

  const submitSkill = async skill => {
    if(edit) {
      await editSkill(skill);
    } else {
      await newSkill(skill);
    }
  }

  const editSkill = async skill => {
    try {
      const token = localStorage.getItem('token');
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clientAxios.put(`/technology/${skill.id}`, skill, config);
      
      const updatedSkills = skills.map(skillState => skillState._id === data._id ? data : skillState);
      setSkills(updatedSkills);

      setAlert({
        msg: 'Habilidad actualizada correctamente',
        error: false
      })

      setTimeout(() => {
        closeModal()
      }, 3000)
    } catch (error) {
      console.log(error);
    }
  }

  const newSkill = async skill => {
    try {
      const token = localStorage.getItem('token');
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clientAxios.post('/technology', skill, config);

      setSkills([...skills, data]);

      showAlert({
        msg: 'Habilidad añadida correctamente',
        error: false
      })

    } catch (error) {
      console.log(error);
    }
  }

  const deleteSkill = async id => {
    try {
      const token = localStorage.getItem('token');
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clientAxios.delete(`/technology/${id}`, config);
      window.alert(data.msg)

      const updatedSkills = skills.filter(skillState => skillState._id !== id);
      setSkills(updatedSkills);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SkillsContext.Provider
      value={{
        skills,
        loading,
        setSkills,
        showAlert,
        alert,
        submitSkill,
        showModal,
        setShowModal,
        closeModal,
        openEditModal,
        edit,
        tech,
        setTech,
        deleteSkill
      }}
    >
      {children}
    </SkillsContext.Provider>
  )
}

export {
  SkillsProvider
}

export default SkillsContext;