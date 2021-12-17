import { SuseLogoSVG } from '@/assets/images'
import { PROJECT_CONFIGURATION } from '@/db/project-info'
import { InfinityLine } from '@/components/IfiniteLine'

export const Header = () => {
  const { projectSubtitle } = PROJECT_CONFIGURATION

  return (
    <div className='relative bg-secondary-dark text-white py-1'>
      <div className='absolute -bottom-2 w-full'>
        <InfinityLine />
      </div>
      {/* Header content */}

      <div className='grid grid-flow-row md:grid-flow-row mx-auto max-w-[1400px] w-full  items-center'>
        {/* Main Header */}
        <div className='grid gap-2'>
          <div className='flex flex-row items-center align-items-center justify-between align-middle gap-2'>
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <span className='w-[130px]'> <SuseLogoSVG /></span>
            <span className='text-xl font-medium text-gray-200 px-4 place-self-center'>{projectSubtitle}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
