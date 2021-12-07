import { ProudlyOpenSVG } from '@/assets/images'

export const ProdudlyOpenSource = () => {
  return <div className="flex flex-row-2 gap-2 md:gap-4 justify-start bg-gray-100 p-4 border-r-4 border-secondary-light">
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-2xl text-secondary-light">
        Proudly Open Source
      </h2>
      <p className='text-gray-800'>
        Open Source is not only about code at SUSE, Open Source is in our Genes. That’s why we have written the  <a className="text-suse-blue underline font-bold" href='#' target='_blank'>SUSE Open Source Policy</a> to share our values and beliefs about contributing to projects and participating in communities, and lay down guidelines for our employees.

      </p>

    </div>
    <ProudlyOpenSVG className='w-64' />
  </div>
}

export default ProdudlyOpenSource
