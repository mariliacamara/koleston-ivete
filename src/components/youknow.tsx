/* eslint-disable @next/next/no-img-element */
import { youKnowItems } from '@/data/youknow.js'

interface Item {
  id: number
  title: string
  image: string
  displayTag: boolean
  description: string
}

export const YouKnow = () => {
  return (
    <section className="youknow--section flex flex-col items-center pb-16">
      <div className="flex flex-col justify-center items-center">
        <h3 className="w-full max-w-[700px] font-bauer text-center text-4xl my-10 text-grad-2">
          Você sabe tudo que vem dentro da caixinha de Koleston
        </h3>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 max-w-[900px]">
          {youKnowItems.map((item: Item) => (
            <div
              key={item.id}
              className="flex flex-row md:flex-col items-center"
            >
              <div className="youknow flex items-center justify-center">
                <img
                  className="youknow--image"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="text-center">
                {item.displayTag && <span>NOVO</span>}
                <h4 className="avenir-black uppercase text-grad">
                  {item.title}
                </h4>
                <div
                  className="avenir-black"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
