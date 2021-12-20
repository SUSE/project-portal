import Head from 'next/head'
import { PROJECT_CONFIGURATION } from '@/db/project-info'
import { FeaturedProject } from '@/components/FeaturedProjects'
import { ProdudlyOpenSource, SUSEandRancher } from '@/components/ProudlyOpenSource'

// import { Ad } from '@/components/Ad'

export default function Home() {
  const { projectTitle, projectSubtitle } = PROJECT_CONFIGURATION

  return (
    <div>
      <Head>
        <title>{projectTitle} </title>
        <meta name='description' content={projectSubtitle} />
        {/** 👀 Replace with your custom favicon.ico */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={'relative grid grid-flow-row gap-24 m-[22px]'}>
        {/** 👀 Why section */}
        <div className='grid gap-4'>
          <div className='col-span-4 text-secondary-dark0'>
            <div className='flex flex-col md:flex-row gap-5 md:gap-10 my-20'>
              <h1 className='w-1/4 leading-tight place-items-center font-medium text-4xl'>Innovate Everywhere</h1>
              <div className=''>
                <p className='font-medium mt-2'>
                  SUSE engineers work closely with open source community members to build and refine the technologies that enable you to innovate everywhere.
                </p>

                <p className='font-medium mt-2'>
                  From operating systems to developer automation tooling, from container runtimes to Kubernetes management platforms, we leverage these projects to create
                  fully supported, open solutions that address the challenges of today’s hybrid cloud, cloud-native, and edge environments.
                </p>
              </div>
            </div>

            <div className='mt-10'>
              <h2 className='text-black font-medium text-3xl mb-6'>Featured Projects</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                <FeaturedProject />
              </div>
            </div>
          </div>
          {/* <div className='self-center'>
            <Ad />
          </div> */}
        </div >

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-32 px-20 mb-20 align-items-center align-middle'>
          <ProdudlyOpenSource />
          <SUSEandRancher />
        </div>
      </main >
    </div >
  )
}
