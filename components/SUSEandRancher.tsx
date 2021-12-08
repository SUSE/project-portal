import { SUSEandRancherSVG } from '@/assets/images'

export const SUSEandRancher = () => {
  return <div className="flex gap-2 md:gap-4 justify-start bg-gray-100 p-4 border-l-4 border-secondary-light">
    <div>
      <SUSEandRancherSVG className='w-64' />
      <p className='text-gray-800'>
        Join the SUSE & Rancher Community – learn and share with other cloud native enthusiasts.
      </p>
    </div>
  </div>
}

export default SUSEandRancher
