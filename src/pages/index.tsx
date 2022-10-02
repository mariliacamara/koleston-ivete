import { YouKnow } from '@/components/youknow'
import { KolestonButton } from '@/components/button'
import { Footer } from '@/components/footer'

const Home = () => {
  return (
    <main>
      <YouKnow />
      <KolestonButton buttonText="Compre toda a linha de Koleston" />
      <KolestonButton buttonText="Compre toda a linha de Koleston" />
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
        <section>
          <h2>Retoque instantâneo de raiz</h2>
          <p>Raízes perfeitas em 3 segundos</p>
          <div>
            <ul>
              <li>Rende até 30 aplicações</li>
              <li>Cabe na bolsa</li>
              <li>Sem amônia</li>
              <li>Fórmula dermatologicamente testada</li>
              <li>Resistente à água</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="http://placehold.it/500x300" alt="" />
                <p>Passo 1</p>
                <p>Agite a lata</p>
              </li>
              <li>
                <img src="http://placehold.it/500x300" alt="" />
                <p>Passo 2</p>
                <p>Aplique a 15cm de distância</p>
              </li>
              <li>
                <img src="http://placehold.it/500x300" alt="" />
                <p>Passo 3</p>
                <p>Espere secar por 2 min e penteie</p>
              </li>
            </ul>
            <img src="http://placehold.it/500x300" alt="" />
          </div>
          <div>
            <h4>Toque de cor</h4>
            <p>
              Super condificionador, de uso diário, que realça sua cor e hidrata
              seu cabelo.
            </p>
          </div>
          <img src="http://placehold.it/500x300" alt="" />
          <img src="http://placehold.it/500x300" alt="" />
        </section>
      </div> */}
      <Footer />
    </main>
  )
}

export default Home
