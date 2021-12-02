import Image from 'next/image'
export const Ad = () => {
  return <div className="flex flex-col bg-gray-100 mt-10">
    <span className="min-w-full min-h-full">
      <Image src='/rancher.png' alt='' width='400px' height='500px' />
    </span>
    <div className="bg-secondary-dark text-center">
      <a className="text-primary" href='https://community.suse.com' target='_blank' rel="noreferrer">https://community.suse.com</a>
    </div>
  </div>
}
