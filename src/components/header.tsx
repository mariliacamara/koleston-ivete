/* eslint-disable @next/next/no-img-element */
export const Header = () => {
  return (
    <header className="flex flex-col items-center header--group">
      <div className="header-name"></div>
      <div className="container header-image hidden md:block">
        <img
          className="koleston"
          src="/assets/images/kv-ivete.webp"
          alt="Koleston"
        />
      </div>
      <div className="container header-image block md:hidden">
        <img
          className="koleston"
          src="/assets/images/header-mobile.webp"
          alt="Koleston"
        />
      </div>
      <div className="custom-purple flag w-full hidden md:flex md:items-center md:justify-center custom-grad text-center avenir-black md:text-3xl pt-3 pb-3 bg-cover">
        Koleston está ainda melhor!
      </div>
    </header>
  )
}
