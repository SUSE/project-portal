import { PROJECTS } from '@/db/projects'
import { ProjectCard } from './Cards'
import { Filter } from './Filter'

export const AllProjects = () => {
  // TODO: Set store with projects
  return <div className=" relative mx-auto w-full flex-grow">
    <div className="absolute min-w-full h-72 bg-secondary-dark grid grid-flow-col ">
      <div className="w-full h-full" style={{ backgroundImage: `url('./road.png')` }}>
      </div>
      <div className="text-white text-2xl text-bold mt-5 ml-6">
        All projects
      </div>
    </div>
    <div className="relative mx-auto w-11/12 2xl:w-3/4 mt-4 ">
      <div className="flex flex-col bg-white mt-24 p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <Filter />

          {/* Project listeing  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:w-10/12">
            {
              PROJECTS
                .map(project => <ProjectCard key={project.name.toLocaleLowerCase()} {...project} />)
            }
          </div>
        </div>
      </div>
    </div>

  </div >
}
