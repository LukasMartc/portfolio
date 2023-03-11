import { useContext } from "react";
import SkillsContext from "../context/SkillsProvider";

const useSkills = () => {
    return useContext(SkillsContext);
}

export default useSkills;