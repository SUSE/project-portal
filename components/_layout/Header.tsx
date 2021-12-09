import { SuseLogoSVG } from '@/assets/images'
import { PROJECT_CONFIGURATION } from '@/db/project-info'
import { InfinityLine } from '@/components/IfiniteLine'

export const Header = () => {
  const { projectSubtitle } = PROJECT_CONFIGURATION

  return (
    <div className='relative bg-secondary-dark text-white py-6'>
      <div className='absolute -bottom-2 w-full'>
        <InfinityLine />
      </div>
      {/* Header content */}

      <div className='grid grid-flow-row md:grid-flow-row mx-auto w-11/12 2xl:w-3/4 items-center'>
        {/* Main Header */}
        <div className='grid gap-4'>
          <div className='flex flex-row items-center align-items-center justify-between align-middle gap-4'>
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <span className='w-[200px]'> <SuseLogoSVG /></span>
            <span className='text-3xl font-medium text-gray-200 px-4 place-self-center'>{projectSubtitle}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
