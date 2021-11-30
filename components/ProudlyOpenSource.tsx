import { ProudlyOpenSVG } from '@/assets/images'

export const ProdudlyOpenSource = () => {
  return <div className="flex flex-col gap-2 md:gap-4 md:flex-row justify-center items-center">
    <div className="flex flex-col gap-2 md:gap-4 md:flex-row items-center">
      <ProudlyOpenSVG className='w-64' />
      <span className="font-bold text-2xl text-secondary-light">
        Proudly <br />
        Open
        Source
      </span>
    </div>
    <p className="px-4">
      Open Source is not only about code at SUSE, Open Source is in our Genes. That’s why we have written the  <a className="text-suse-blue underline font-bold" href='#' target='_blank'>SUSE Open Source Policy</a> to share our values and beliefs about contributing to projects and participating in communities, and lay down guidelines for our employees.
    </p>
  </div>
}

export default ProdudlyOpenSource
