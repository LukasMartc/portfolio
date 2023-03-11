import Skill from "./Skill"

const Technology = ({ title, icon, skills }) => {

  return (
    <div className="w-60 xl:w-80 lg:w-72 sm:w-96">
        <div className="tech flex justify-center items-center">
          <img src={icon} />
        </div>
        <div className="rounded h-auto overflow-hidden shadow-2xl lg:h-80">
          <div className="mt-16 px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center uppercase">
              {title}
            </div>
            <ul className="font-normal text-white leading-8">
              {skills.map(skill => (
                <Skill 
                  key={skill._id}
                  skill={skill}
                />
              ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Technology