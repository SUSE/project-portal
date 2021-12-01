import Image from 'next/image'
import { DocumentationSVG, GithubSVG } from '@/assets/images'
import { ProjectT } from '@/db/projects'

export const FeaturedProjectCard = ({ color, logo, tag, name, description, href, repositoryURL, documentationURL }) => {
  return <div className="relative flex flex-col gap-4 px-4 py-4 align-middle ring-2 ring-inset ring-gray-100">
    <span className="absolute top-0 right-0 text-[10px] font-bold px-1 bg-gray-100 text-gray-400 uppercase">{tag}</span>
    <span className="absolute left-0 top-0 border-2 h-full bg-gray-200 uppercase" style={{ borderColor: `${color}` }}></span>
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2">
        <span className="w-8 h-8">
          <Image src={`/featured_projects/${logo}`} width="32px" height="32px" alt={`${name} logo`} />
        </span>
        <span className="text-lg font-bold">{name}</span>
      </div>
      <p className="text-xs font-bold text-gray-400">{description}</p>
    </div>
    <div className="flex flex-row justify-between">
      <a href="#" className="text-suse-blue font-bold text-[10px] underline place-self-bottom">{href}</a>
      <span className="flex flex-col gap-2 text-primary">
        {
          repositoryURL && (<a className="flex align-middle gap-1 font-bold hover:underline" href={repositoryURL}> <GithubSVG className="w-4 h-4 fill-current" /> <span className="text-[10px] place-self-center">Repository</span></a>)
        }
        {
          documentationURL && (<a className="flex align-middle gap-1 font-bold hover:underline" href={documentationURL}>
            <DocumentationSVG className="w-4 h-4 fill-current" />
            <span className="text-[10px] place-self-center">Documentation</span>
          </a>)
        }
      </span>
    </div>
  </div>
}

export const ProjectCard = ({ name, description, tag, repositoryURL, documentationURL }: ProjectT) => {
  return <div className="flex flex-col gap-2 align-middle">
    <div className="flex flex-col gap-2 w-full">
      <span className="text-xl font-bold">{name}</span>
      <p className="text-sm font-bold text-gray-400">{description}</p>
    </div>
    <div className="flex flex-row justify-between">
      <a href="#" className="flex text-center align-middle text-secondary-light border-2 border-secondary-light px-2 text-xs font-bold">{tag}</a>
      <span className="flex flex-row gap-2 text-primary">
        {
          repositoryURL?.length && (<a href={`https:www.${repositoryURL}`} target="_blank" rel="noreferrer" > <GithubSVG className="w-4 h-4 fill-current" /></a>)
        }
        {
          documentationURL && (<a href={documentationURL}>
            <DocumentationSVG className="w-4 h-4 fill-current" />
          </a>)
        }
      </span>
    </div>
  </div>
}
