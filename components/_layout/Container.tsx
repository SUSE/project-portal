import { AnimatePresence } from 'framer-motion'
import { AllProjects } from '../AllProjects'
import { Footer } from './Footer'
import { Header } from './Header'

export const Container = ({ children }) => {
  return (
    <AnimatePresence>
      <div className='grid grid-flow-row min-h-screen'>
        <Header />
        <div className='mx-auto w-[1400px] flex-grow'>{children}</div>
        <AllProjects />
        <Footer />
      </div>
    </AnimatePresence>
  )
}
