/* eslint-disable @next/next/no-img-element */
export const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <img
        className="koleston"
        src="/assets/images/header.png"
        alt="Koleston"
      />
      <div className="custom-purple flag w-full flex items-center justify-center custom-grad text-center avenir-black text-3xl pt-3 pb-6 bg-cover">
        Koleston está ainda melhor!
      </div>
    </header>
  )
}
