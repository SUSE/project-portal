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
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='col-span-4'>
            <p className='text-secondary-light font-bold text-3xl mb-6'>Featured Projects</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-10 ">
              <FeaturedProject />
            </div>
          </div>
          {/* <div className='self-center'>
            <Ad />
          </div> */}
        </div>

        <div className='grid grid-cols-2 md:gap-20 align-items-center align-middle'>
          <ProdudlyOpenSource />
          <SUSEandRancher />
        </div>
      </main>
    </div>
  )
}
