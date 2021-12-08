/* eslint-disable @next/next/no-img-element */
import { DocumentationSVG, GithubSVG, TwitterSVG, WebsiteSVG } from '@/assets/images'
import { ProjectT } from '@/db/projects'
import { motion } from 'framer-motion'
import { motionListItems } from '@/assets/animations'
import { PREFIX } from '@/utils/constants'

export const FeaturedProjectCard = ({ color, logo, tag, name, description, href, repositoryURL, documentationURL, twitterURL }) => {
  return <motion.div initial='hidden'
    animate='visible' variants={motionListItems} className="relative grid gap-4 align-middle ring-2 ring-inset ring-gray-100">
    {/* <span className="absolute top-0 right-0 text-[10px] font-bold px-1 bg-gray-100 text-gray-400 capitalize">{tag}</span> */}
    <span className="absolute left-0 top-0 border-2 h-full uppercase" style={{ borderColor: `${color}` }}></span>
    <div className="flex flex-col gap-4 w-full px-4 py-4">
      <div className="flex items-start gap-2">
        <span className="w-16 h-w-16">
          <img src={`${PREFIX}/${logo}`} alt={`${name} logo`} />
        </span>
        <div className='flex flex-col'>
          <span className="text-lg font-bold">{name}</span>
          <span className="place-self-start text-[10px] font-bold px-1 bg-gray-100 text-gray-400 capitalize">{tag}</span>
        </div>
      </div>
      <p className="text-sm font-bold text-gray-500">{description}</p>
    </div>
    <div className="flex justify-center flex-row gap-10 md:gap-20 bg-gray-100 p-2">
      {
        href && <a href={href} target="_blank" className="group flex flex-col justify-center place-items-center align-middle gap-1 font-bold" rel="noreferrer">
          <WebsiteSVG className="w-5 h-5 fill-current text-gray-400 group-hover:text-primary" />
          <span className="text-[10px] place-self-center text-gray-500 group-hover:text-primary hover:scale-105">
            Website
          </span>
        </a>
      }
      {
        repositoryURL && (<a className="group flex flex-col justify-center place-items-center align-middle gap-1 font-bold" href={repositoryURL}>
          <GithubSVG className="w-5 h-5 fill-current text-gray-400 group-hover:text-primary" />
          <span className="text-[10px] place-self-center text-gray-500 group-hover:text-primary hover:scale-105">
            Repository
          </span></a>)
      }
      {
        documentationURL && (<a className="group flex flex-col justify-center place-items-center align-middle gap-1 font-bold" href={documentationURL}>
          <DocumentationSVG className="w-5 h-5 fill-current text-gray-400 group-hover:text-primary" />
          <span className="text-[10px] place-self-center text-gray-500 group-hover:text-primary hover:scale-105">
            Documentation
          </span>
        </a>)
      }
      {
        twitterURL && (<a className="group flex flex-col justify-center place-items-center align-middle gap-1 font-bold" href={twitterURL}>
          <TwitterSVG className="w-5 h-5 fill-current text-gray-400 group-hover:text-primary" />
          <span className="text-[10px] place-self-center text-gray-500 group-hover:text-primary hover:scale-105">
            Twitter
          </span>
        </a>)
      }
    </div>
  </motion.div>
}

export const ProjectCard = ({ name, description, tag, repositoryURL, documentationURL }: ProjectT) => {
  return <motion.div variants={motionListItems} className="flex flex-col gap-2 align-middle hover:cursor-pointer hover:bg-gray-50 p-2">
    <a href={`https://www.${repositoryURL}`} target="_blank" rel="noreferrer" >
      <div className="flex flex-col gap-2 w-full">
        <span className="text-xl font-bold">{name}</span>
        <span className="flex place-self-start bg-gray-100 text-gray-500 px-2 text-[10px] capitalize">{tag}</span>
        <p className="text-sm font-bold text-gray-500">{description}</p>
      </div>
      <div className="flex flex-row justify-start gap-2">

        {/* <span className="flex flex-row gap-2 text-primary">
        {
          repositoryURL?.length && (<a href={`https:www.${repositoryURL}`} target="_blank" rel="noreferrer" > <WebsiteSVG className="w-4 h-4 fill-current" /></a>)
        }
        {
          documentationURL && (<a href={documentationURL}>
            <DocumentationSVG className="w-4 h-4 fill-current" />
          </a>)
        }
      </span> */}
      </div>
    </a>


  </motion.div>
}
