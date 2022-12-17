import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = ({icon, link}) => {
  return (
    <a href={link} target="_blank" className="bg-white w-8 flex items-center justify-center mx-auto rounded-3xl sm:w-9 py-2">
        <FontAwesomeIcon className="text-base text-gray-900 sm:text-xl" icon={icon} />
    </a>
  )
}

export default Icon