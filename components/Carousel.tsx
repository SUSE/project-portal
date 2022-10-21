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
    <Carousel className='py-8' responsive={responsive}   showDots={false}  autoPlay infinite
    autoPlaySpeed={1000}>
      {sponsored.map((sponsor, index) => {
        return <Item {...sponsor} key={index} />
      })}
    </Carousel>
  )
}

const Item = (prop) => {
  const {img, description, repositoryURL} = prop
  return (
    <div className='flex items-center relative group  h-full m-2 px-2 hover:scale-110 hover:cursor-pointer transition-all'>
      <a href={repositoryURL} target="_blank" rel="noreferrer">
      <img className='w-36 max-h-24' src={`./logos/${img}`} alt=''/>
      </a>

      {/* <div className='absolute text-white z-50  group-hover:flex bg-black bg-opacity-20 -top-40 w-[300px] h-[200px]'>{description}</div> */}
    </div>
  )
}
