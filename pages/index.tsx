import Head from 'next/head'
import { PROJECT_CONFIGURATION } from '@/db/project-info'
import { FeaturedProject } from '@/components/FeaturedProjects'
import ProdudlyOpenSource from '@/components/ProudlyOpenSource'

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
          <div className='col-span-3'>
            <p className='text-secondary-light font-bold text-3xl mb-6'>Featured Projects</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-10 ">
              <FeaturedProject />
            </div>
          </div>
          <div>
            Ad row here
          </div>
        </div>

        <div className='grid grid-flow-row'>
          <ProdudlyOpenSource />
        </div>
      </main>
    </div>
  )
}
