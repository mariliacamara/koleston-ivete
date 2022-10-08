import Head from 'next/head'
import { YouKnow } from '@/components/youknow'
import { Retoque } from '@/components/retoque'
import { ToqueDeCor } from '@/components/toque'
import { Footer } from '@/components/footer'
import { NovaFormula } from '@/components/nova-formula'
import { Header } from '@/components/header'

const Home = () => {
  return (
    <main>
      <Head>
        <title>Conheça Koleston</title>
      </Head>
      <Header />
      <NovaFormula />
      <YouKnow />
      <Retoque />
      <ToqueDeCor />
      <Footer />
    </main>
  )
}

export default Home
