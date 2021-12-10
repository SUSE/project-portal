import { HandLeafSVG, SUSEandRancherSVG } from '@/assets/images'

export const ProdudlyOpenSource = () => {
  return <div className="flex flex-row-2 gap-2 md:gap-4 justify-start ">
    <div className="flex flex-col gap-2">
      <div className='flex justify-center align-middle place-items-center gap-2'>
        <HandLeafSVG className='w-10 align-middle' />
        <h2 className=" font-bold text-2xl text-secondary-light">
          Proudly Open Source
        </h2>
      </div>

      <p className='text-gray-800 text-center'>
        Open Source is not only about code at SUSE, it’s in our Genes. <br />
        The <a className="text-suse-blue underline font-bold" href='https://opensource.suse.com/suse-open-source-policy.html' target='_blank' rel="noreferrer">SUSE Open Source Policy</a> defines our shared values and beliefs
        about contributing to projects and participating in communities.

      </p>

    </div>
    {/* <ProudlyOpenSVG className='w-64' /> */}
  </div>
}


export const SUSEandRancher = () => {
  return <div className="flex flex-row-2 gap-2 md:gap-4 justify-center ">
    <div className="flex flex-col gap-2">
      {/* <h2 className="font-bold text-2xl text-secondary-light">
        SUSE & Rancher Open Source
      </h2> */}
      <span className='text-center mx-auto'>
        <SUSEandRancherSVG />
      </span>
      <p className='text-gray-800 text-center'>
        Ask questions and learn more about these projects in our community. <br />

        <a className="text-suse-blue underline font-bold" href='https://community.suse.com/' target='_blank' rel="noreferrer">Join the SUSE & Rancher Community</a>
      </p>
    </div>
    {/* <ProudlyOpenSVG className='w-64' /> */}
  </div>
}
// export const SUSEandRancher = () => {
//   return <div className="flex gap-2 md:gap-4 justify-start  p-4">
//     <div>
//       <SUSEandRancherSVG className='w-64' />
//       <p className='text-gray-800'>
//         Join the SUSE & Rancher Community – learn and share with other cloud native enthusiasts.
//       </p>
//     </div>
//   </div>
// }
