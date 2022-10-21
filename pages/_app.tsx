import { Container } from '@/components/_layout/Container'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import 'global.css'
// Import Swiper styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
