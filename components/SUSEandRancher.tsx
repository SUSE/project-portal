import { SUSECommunitySVG } from '@/assets/images'

export const SUSEandRancher = () => {
  return (
    <div className='flex gap-2 md:gap-20 justify-start bg-gray-100 p-4 border-l-4 border-secondary-light'>
      <div>
        <SUSECommunitySVG className='w-64' />
        <p className='text-gray-800'>Find out more!</p>
      </div>
    </div>
  )
}

export default SUSEandRancher
