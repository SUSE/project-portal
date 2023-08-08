import { AllProjects } from '@/components/AllProjects'
import { SponsorsCarousel } from '@/components/Carousel'
import { FeaturedProject } from '@/components/FeaturedProjects'
import { ProudlyOpenSource, SUSECommunity } from '@/components/ProudlyOpenSource'
import { PROJECT_CONFIGURATION } from '@/db/project-info'
import Head from 'next/head'

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
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <main className={'relative grid grid-flow-row gap-24 m-[22px] mx-auto max-w-[1400px] w-full p-8'}>
        {/** 👀 Why section */}
        <div className='grid gap-4'>
          <div className='col-span-4 text-secondary-dark0'>
            <div className='flex flex-col md:flex-row gap-5 md:gap-20 my-20'>
              <h1 className='leading-tight place-items-center font-medium text-5xl'>Innovate Everywhere</h1>
              <div className=''>
                <p className='font-medium mt-3 text-xl'>SUSE engineers work closely with open source community members to build and refine the technologies that enable you to innovate everywhere.</p>

                <p className='font-medium mt-3 text-xl'>From operating systems to developer automation tooling, from container runtimes to Kubernetes management platforms, we leverage these projects to create fully supported, open solutions that address the challenges of today’s hybrid cloud, cloud-native, and edge environments.</p>
              </div>
            </div>

            <div className='mt-10'>
              <h2 className='text-black font-medium text-3xl mb-6'>Featured Projects</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 lg:gap-x-14 xl:gap-x-20'>
                <FeaturedProject />
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-32 md:px-20 align-items-center align-middle'>
          <ProudlyOpenSource />
          <SUSECommunity />
        </div>

        <hr />
        <div className='grid'>
          <div>
            <p className='text-2xl text-black font-medium text-center'>Proudly Sponsoring</p>
            {/* <p className='text-sm text-center mx-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi tenetur impedit, iusto illum ipsum molestias quae, tempore consectetur quia exercitationem vel eum maxime ex nostrum necessitatibus accusantium velit dolore!</p> */}
          </div>

          <SponsorsCarousel />
        </div>
      </main>
      <AllProjects />
    </div>
  )
}
