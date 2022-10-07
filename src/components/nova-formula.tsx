import { KolestonButton } from './button'

/* eslint-disable @next/next/no-img-element */
export const NovaFormula = () => {
  return (
    <section className="flex flex-col items-center text-center md:pb-10">
      <h2 className="max-w-[700px] avenir-black text-lg md:text-3xl mt-4 md:mt-16 mb-8">
        Uma nova fórmula com ainda mais tratamento! <br /> Disponível em 35
        cores!
      </h2>
      <img
        className="max-w-[1000px] w-full"
        src="/assets/images/nova-formula/produtos-3.webp"
        alt=""
      />
      <div className="your-color text-grad-2 font-bauer text-2xl md:text-4xl mt-16 mb-8 md:mb-10">
        <span>Descubra a sua cor ideal!</span>
      </div>
      <KolestonButton
        buttonText="<p>Clique aqui e experimente<br /> nosso teste de cor virtual</p>"
        url="https://www.wella.com/br/teste-online-de-cor-wella"
      />
    </section>
  )
}
