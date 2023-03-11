import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutMeCard = ({ title, first, second, thrid, fourth, fifth, firstIcon, secondIcon, thridIcon, fourthIcon, fifthIcon }) => {
  return (
    <div className='flex-col'>
      <h3 className='text-cyan-200 font-bold uppercase pb-2 text-lg'>{title}</h3>
      <ul className="font-normal text-white leading-8">
        <li>
          <FontAwesomeIcon icon={firstIcon} className='h-4 w-4 text-xs pr-1 text-cyan-200' /> {first}
        </li>
        <li>
          <FontAwesomeIcon icon={secondIcon} className='h-4 w-4 text-xs pr-1 text-cyan-200' /> {second}
        </li>
        <li>
          <FontAwesomeIcon icon={thridIcon} className='h-4 w-4 text-xs pr-1 text-cyan-200' /> {thrid}
        </li>
        <li>
          <FontAwesomeIcon icon={fourthIcon} className='h-4 w-4 text-xs pr-1 text-cyan-200' /> {fourth}
        </li>
        <li>
          <FontAwesomeIcon icon={fifthIcon} className='h-4 w-4 text-xs pr-1 text-cyan-200' /> {fifth}
        </li>
      </ul>
    </div>
  )
}

export default AboutMeCard