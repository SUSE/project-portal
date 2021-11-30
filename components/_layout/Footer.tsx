import { SuseLogoSVG } from '@/assets/images'
import { PROJECT_CONFIGURATION } from '@/db/project-info'

export const Footer = () => {
  const { projectFooterLinks } = PROJECT_CONFIGURATION
  return (
    <div className=' bg-secondary-dark text-white py-4'>
      <div className='grid grid-flow-row align-middle mx-auto w-3/4'>
        <div className='grid grid-flow-row md:grid-flow-col gap-4 justify-start items-center'>
          <SuseLogoSVG className='w-40 h-20 fill-current text-white' />
          <div className='flex gap-2 flex-wrap'>
            {projectFooterLinks.map((ele) => (
              <a className='font-bold' key={ele.title} href={ele.href} target='_blank' rel='noreferrer'>
                {ele.title}
              </a>
            ))}
          </div>
        </div>
        <span className='border border-gray-400 border-dotted'></span>
      </div>
    </div>
  )
}
