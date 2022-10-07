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
    <section className="youknow--section flex flex-col items-center pt-10 md:pt-0 pb-16 px-8 md:px-0">
      <div className="flex flex-col justify-center items-center">
        <h3 className="w-full max-w-[700px] font-bauer text-center text-xl md:text-4xl my-10 text-grad-2 px-8">
          Você sabe tudo que vem dentro da caixinha de Koleston
        </h3>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 w-full max-w-[900px] px-12 md:px-0 hidden">
          {youKnowItems.map((item: Item) => (
            <div
              key={item.id}
              className="flex flex-row md:flex-col items-center"
            >
              <div className="youknow md:flex md:items-center md:justify-center">
                <img
                  className="youknow--image"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="text-left md:text-center">
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
        <div className="flex flex-col gap-6 w-full flex md:hidden">
          {youKnowItems.map((item: Item) => (
            <div
              key={item.id}
              className="flex flex-row md:flex-col items-center"
            >
              <div className="youknow md:flex md:items-center md:justify-center">
                <img
                  className="youknow--image"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="text-left md:text-center">
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
