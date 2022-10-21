import { SuseLogoSVG } from '@/assets/images'
import { PROJECT_CONFIGURATION } from '@/db/project-info'

export const Footer = () => {
  const {
    projectFooterLinks,
    projectNavigation: { social },
  } = PROJECT_CONFIGURATION
  return (
    <div className=' bg-secondary-dark text-white py-4'>
      <div className='grid grid-flow-row align-middle mx-auto max-w-[1400px] w-full '>
        <div className='flex place-items-center justify-between p-8'>
          <div className='flex gap-2 flex-wrap justify-self-start place-items-center'>
            <SuseLogoSVG className='w-36' />
            {projectFooterLinks.map((ele) => (
              <a className='font-medium text-xs' key={ele.title} href={ele.href} target='_blank' rel='noreferrer'>
                {ele.title}
              </a>
            ))}
          </div>
          <div className='flex gap-2 justify-self-end'>
            {social.map((ele) => (
              <a className='font-medium text-xs w-4 h-4' key={ele.url} href={ele.url} target='_blank' rel='noreferrer'>
                <ele.icon className='w-4 fill-current text-white' />
              </a>
            ))}
          </div>
        </div>

        <span className='border border-gray-400 border-dotted mx-8'></span>

        <div className='flex justify-between align-center p-8 w-full'>
          <div className='flex text-xs gap-8'>
            <p>Sales Number: 49-911-740-53-0</p>
            <p>
              Support:
              <a className='hover:underline' href='https://www.suse.com/support/handbook/#open' target='_blank' rel='noreferrer'>
                {' '}
                Open a Support Case
              </a>
            </p>
          </div>
          <div className='flex text-xs gap-8'>
            <p>© 2021 SUSE, All Rights Reserved</p>
            {/* <p>
              Support:
              <a className='hover:underline' href='https://www.suse.com/support/handbook/#open' target='_blank' rel="noreferrer" > Open a Support Case</a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
