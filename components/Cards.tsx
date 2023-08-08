/* eslint-disable @next/next/no-img-element */
import { motionListItems } from '@/assets/animations'
import { DocumentationSVG, ExternalLinkSVG, GithubSVG, TwitterSVG, WebsiteSVG } from '@/assets/images'
import { ProjectT } from '@/db/projects'
import { PREFIX } from '@/utils/constants'
import { motion } from 'framer-motion'

export const FeaturedProjectCard = ({ color, logo, tag, name, description, href, repositoryURL, documentationURL, twitterURL }) => {
  return (
    <motion.div initial='hidden' animate='visible' variants={motionListItems} className='relative grid gap-4 align-middle ring-2 ring-inset ring-gray-100'>
      <span className='absolute left-0 top-0 border-2 w-full uppercase' style={{ borderColor: `${color}` }}></span>
      <div className='flex flex-col gap-4 w-full p-4'>
        <div className='flex items-start gap-2'>
          <span className='w-[180px]'>
            <img src={`${PREFIX}/featured_projects/${logo}`} alt={`${name} logo`} />
          </span>

          <span className='absolute top-1.5 right-0 place-self-start text-[10px] px-2 py-1 bg-gray-100 text-gray-500 capitalize'>{tag}</span>
        </div>
        <p className='text-sm text-black'>{description}</p>
      </div>
      <div className='flex justify-center content-center items-center flex-row gap-10 md:gap-20 bg-suse-gray p-2'>
        {href && (
          <a href={href} target='_blank' className='group flex flex-col justify-center place-items-center align-middle gap-1 font-medium' rel='noreferrer'>
            <WebsiteSVG className='p-0 w-5 h-5 fill-current object-fill text-gray-400 group-hover:text-primary' />
            <span className='text-[10px] place-self-center text-gray-500 group-hover:text-primary hover:scale-105'>Website</span>
          </a>
        )}
        {repositoryURL && (
          <a className='group flex flex-col justify-center place-items-center align-middle gap-1 font-medium' href={repositoryURL} target='_blank' rel='noreferrer'>
            <GithubSVG className='w-5 h-5 fill-current text-gray-400 group-hover:text-primary' />
            <span className='text-[10px] place-self-center text-gray-500 group-hover:text-primary hover:scale-105'>Repository</span>
          </a>
        )}
        {documentationURL && (
          <a className='group flex flex-col justify-center place-items-center align-middle gap-1 font-medium' href={documentationURL} target='_blank' rel='noreferrer'>
            <DocumentationSVG className='w-5 h-5 fill-current text-gray-400 group-hover:text-primary' />
            <span className='text-[10px] place-self-center text-gray-500 group-hover:text-primary hover:scale-105'>Documentation</span>
          </a>
        )}
        {twitterURL && (
          <a className='group flex flex-col justify-center place-items-center align-middle gap-1 font-medium' href={twitterURL} target='_blank' rel='noreferrer'>
            <TwitterSVG className='w-5 h-5 fill-current text-gray-400 group-hover:text-primary' />
            <span className='text-[10px] place-self-center text-gray-500 group-hover:text-primary hover:scale-105'>X</span>
          </a>
        )}
      </div>
    </motion.div>
  )
}

export const ProjectCard = ({ name, description, tag, repositoryURL, documentationURL }: ProjectT) => {
  return (
    <motion.div variants={motionListItems} className='group flex flex-col gap-2 align-middle hover:cursor-pointer p-2'>
      <a href={`${repositoryURL}`} target='_blank' rel='noreferrer'>
        <div className='flex flex-col gap-2 w-full'>
          <span className='flex gap-1 items-center hover:scale-105 transition-transform'>
            <span className='text-xl font-medium group-hover:underline'>{name}</span>
            <span className='hidden group-hover:flex'>
              <ExternalLinkSVG className='w-4 h-4' />
            </span>
          </span>
          <span className='flex place-self-start bg-gray-100 text-gray-500 px-2 text-[10px] capitalize'>{tag}</span>
          <p className='text-sm text-black'>{description}</p>
        </div>
        <div className='flex flex-row justify-start gap-2'></div>
      </a>
    </motion.div>
  )
}
