import GradientCard from './GradientCard'
import technologies from '../../data/technologies.json'

export default function TechnologyCards() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {technologies.map((tech, index) => (
        <GradientCard key={index} name={tech.name} icon={tech.icon} />
      ))}
    </div>
  )
}

