/* eslint-disable @next/next/no-img-element */
export const Retoque = () => {
  return (
    <section className="flex flex-col items-center text-center pb-10">
      <h2 className="uppercase avenir-black text-4xl text-grad mt-16">
        Retoque instantâneo de raiz
      </h2>
      <p className="max-w-[550px] font-semibold text-3xl avenir-black mb-4">
        Raízes perfeitas em 3 segundos
      </p>
      <img src="/assets/images/retoque/produtos-1.webp" alt="" />
      <hr className="custom-hr" />
      <div className="mt-8 mb-8">
        <ul className="font-semibold text-3xl avenir-black">
          <li className="pb-3">Rende até 30 aplicações</li>
          <li className="pb-3">Cabe na bolsa</li>
          <li className="pb-3">Sem amônia</li>
          <li className="pb-3">Fórmula dermatologicamente testada</li>
          <li>Resistente à água</li>
        </ul>
      </div>
      <hr className="custom-hr" />
      <div className="flex flex-col items-center justify-center mt-16">
        <ul className="flex flex-row items-center justify-center">
          <li>
            <img
              src="/assets/images/retoque/passo1.webp"
              alt="Passo 1 - Agite a lata"
            />
          </li>
          <li>
            <img
              src="/assets/images/retoque/passo2.webp"
              alt="Passo 2 - Aplique a 15cm de distância"
            />
          </li>
          <li>
            <img
              src="/assets/images/retoque/passo3.webp"
              alt="Passo 3 - Espere secar por 2min e penteie"
            />
          </li>
        </ul>
        <img
          className="max-w-[300px] w-full mt-10"
          src="/assets/images/retoque/before-after.webp"
          alt="Imagem do antes e depois"
        />
      </div>
    </section>
  )
}
