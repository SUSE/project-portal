import { AllProjects } from '../AllProjects'
import { Footer } from './Footer'
import { Header } from './Header'

export const Container = ({ children }) => {
  return (
    <div className='grid grid-flow-row gap-4 min-h-screen'>
      <Header />
      <div className='mx-auto w-11/12 2xl:w-3/4 flex-grow'>{children}</div>
      <AllProjects />
      <Footer />
    </div>
  )
}
