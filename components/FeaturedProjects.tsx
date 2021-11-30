import { FEATURED_PROJECTS } from '@/db/featured'
import { FeaturedProjectCard } from './Cards'

export const FeaturedProject = () => {
  return <>
    {FEATURED_PROJECTS.map(project => <FeaturedProjectCard key={project.name.toLocaleLowerCase()} {...project} />)}
  </>
}
