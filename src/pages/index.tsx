import { YouKnow } from '@/components/youknow'
import { Retoque } from '@/components/retoque'
import { ToqueDeCor } from '@/components/toque'
import { Footer } from '@/components/footer'
import { NovaFormula } from '@/components/nova-formula'

const Home = () => {
  return (
    <main>
      <NovaFormula />
      <YouKnow />
      {/* <header>
        <h2>Cabelo forte por dentro, COR 100% INTERNSA POR FORA</h2>
      </header>
      <div className="main-section">
        <section>
          <h3>Koleston está ainda melhor!</h3>
          <p>
            Uma nova fórmula com ainda mais tratamento. Disponível em 35 cores.
          </p>

          <h3>Descubra sua cor ideial</h3>
          <a href="http://www.google">
            Clique aqui e experimente nosso teste de cor virtual
          </a>
        </section>
      </div> */}
      <Retoque />
      <ToqueDeCor />
      <Footer />
    </main>
  )
}

export default Home
