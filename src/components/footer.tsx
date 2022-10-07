/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
  return (
    <footer className="flex flex-col items-center">
      <div>
        <img
          className="koleston w-[350px] md:w-full"
          src="/assets/images/footer.webp"
          alt="Koleston"
        />
      </div>
      <img
        className="logo w-[200px] md:w-[450px]"
        src="/assets/images/logo.webp"
        alt="Koleston logo"
      />
      <div className="w-full h-6 mt-5 custom-grad"></div>
    </footer>
  )
}
