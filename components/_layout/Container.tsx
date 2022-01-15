import { AnimatePresence } from 'framer-motion'
import { Footer } from './Footer'
import { Header } from './Header'

export const Container = ({ children }) => {
  return (
    <AnimatePresence>
      <div className='grid grid-flow-row min-h-screen'>
        <Header />
        <div className='flex-grow'>{children}</div>
        <Footer />
      </div>
    </AnimatePresence>
  )
}
