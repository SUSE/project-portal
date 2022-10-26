import { sponsored } from '@/db/sponsored'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export const SponsorsCarousel = () => {
  return (
    <Carousel className='py-8' responsive={responsive} showDots={false} autoPlay infinite autoPlaySpeed={1000}>
      {sponsored.map((sponsor, index) => {
        return <Item {...sponsor} key={index} />
      })}
    </Carousel>
  )
}

const Item = (prop) => {
  const { img, description, repositoryURL } = prop
  return (
    <div className='relative group'>
      <a href={repositoryURL} target='_blank' rel='noreferrer'>
        <div className='z-10 hidden absolute group-hover:flex transition-all p-2 bg-black border-t-2 border-primary text-white text-sm opacity-90 h-screen w-full rounded-sm hover:cursor-pointer'>{description}</div>
        <div className='z-0 flex items-center relative group  h-full m-2 px-2 transition-all'>
          <img className='w-36 max-h-24' src={`./logos/${img}`} alt='' />
        </div>
      </a>
    </div>
  )
}
