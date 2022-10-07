/* eslint-disable @next/next/no-img-element */
import { youKnowItems } from '@/data/youknow.js'
import clsx from 'clsx'

interface Item {
  id: number
  title: string
  image: string
  displayTag: boolean
  description: string
  customHeight: string
}

export const YouKnow = () => {
  return (
    <section className="youknow--section flex flex-col items-center pt-6 md:pt-0 pb-16 pl-4 pr-6 md:px-0">
      <div className="flex flex-col justify-center items-center">
        <h3 className="w-full max-w-[700px] font-bauer text-center text-xl md:text-4xl mt-10 mb-1 md:my-10 text-grad-2 px-6">
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
              <div
                className={clsx(
                  'text-left md:text-center',
                  item.displayTag ? 'mt-0' : 'mt-6'
                )}
              >
                {item.displayTag && (
                  <div className="flex justify-center items-center text-left md:text-center">
                    <img
                      className="max-w-[70px]"
                      src="/assets/images/new.png"
                      alt="NOVO"
                    />
                  </div>
                )}
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
        <div className="block md:hidden">
          {youKnowItems.map((item: Item) => (
            <div key={item.id} className="flex items-center gap-2">
              <div className="w-[50%] inline-block">
                <img
                  className="youknow--image"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="w-[60%] inline-block text-left md:text-center">
                {item.displayTag && (
                  <span>
                    <img
                      className="max-w-[50px]"
                      src="/assets/images/new.png"
                      alt="NOVO"
                    />
                  </span>
                )}
                <h4 className="avenir-black uppercase text-sm text-grad">
                  {item.title}
                </h4>
                <div
                  className="avenir-black text-sm"
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
