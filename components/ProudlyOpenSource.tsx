import { HandLeafSVG, SUSECommunitySVG } from '@/assets/images'
import Link from 'next/link'

export const ProudlyOpenSource = () => {
  return (
    <div className='flex flex-row-2 gap-2 md:gap-4 justify-start mb-20'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-left align-middle place-items-center gap-2'>
          <HandLeafSVG className='w-10 align-middle' />
          <h2 className=' font-medium text-2xl text-black'>Proudly Open Source</h2>
        </div>

        <p className='text-gray-800 text-left'>Open Source is not only about code at SUSE, it’s in our Genes.</p>
        <p className='text-gray-800 text-left'>
          The{' '}
          <Link href='/legal/policy'>
            <a className='text-suse-blue underline font-medium mr-2'>SUSE Open Source Policy</a>
          </Link>
          defines our shared values and beliefs about contributing to projects and participating in communities.
        </p>
      </div>
    </div>
  )
}

export const SUSECommunity = () => {
  return (
    <div className='flex flex-row-2 gap-2 md:gap-4 justify-center '>
      <div className='flex flex-col gap-2 mb-20'>
        <span className='text-center mx-auto'>
          <SUSECommunitySVG />
        </span>
        <p className='text-gray-800 text-center'>
          Ask questions and learn more about these projects in our community. <br />
        </p>
        <a className='mx-auto text-black bg-primary hover:bg-opacity-70 px-4 py-1 hover:border-primary font-medium' href='https://www.suse.com/community/' target='_blank' rel='noreferrer'>
          Find out more!
        </a>
      </div>
    </div>
  )
}
