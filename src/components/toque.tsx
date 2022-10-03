import { KolestonButton } from '@/components/button'

/* eslint-disable @next/next/no-img-element */
export const ToqueDeCor = () => {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="uppercase avenir-black text-4xl text-grad-2 mt-8">
        Toque de cor
      </h2>
      <p className="max-w-[550px] text-3xl avenir-black">
        Super condificionador, de uso diário, que realça sua cor e hidrata seu
        cabelo.
      </p>
      <div className="max-w-[500px] my-8 flex flex-col gap-6">
        <img
          src="/assets/images/toque/produtos-4.webp"
          alt="Imagem de produtos Koleston Toque de Cor"
        />
        <img src="/assets/images/toque/steps.webp" alt="Passo a passo" />
        <ul className="sr-only">
          <li>
            Após shampoo, com os cabelos úmidos, aplique da raiz às pontas
          </li>
          <li>Massageie.</li>
          <li>Deixe agir por 5 minutos.</li>
          <li>Enxágue</li>
        </ul>
      </div>
      <KolestonButton buttonText="<p><span className='font-4xl'>Compre toda a linha de</span><br> Koleston</p>" />
    </section>
  )
}
