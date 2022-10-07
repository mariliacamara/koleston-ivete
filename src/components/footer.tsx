/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
  return (
    <footer className="flex flex-col items-center">
      <img
        className="koleston"
        src="/assets/images/footer.webp"
        alt="Koleston"
      />
      <img
        className="logo w-[200px]"
        src="/assets/images/logo.webp"
        alt="Koleston logo"
      />
      <div className="w-full h-6 mt-5 custom-grad"></div>
    </footer>
  )
}
