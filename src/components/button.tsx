import Link from 'next/link'

interface Props {
  url: string
}

export const KolestonButton = (props: Props) => {
  const { url } = props
  return (
    <>
      <div className="md:max-w-[600px] text-center hidden md:block">
        <Link href={url}>
          <a>
            <img
              src="/assets/images/button-top.png"
              alt="Clique aqui e experimente nosso teste de cor virtual"
            />
          </a>
        </Link>
      </div>
      <div className="mobile-btn md:max-w-[600px] text-center md:hidden">
        <Link href={url}>
          <a>
            <img
              src="/assets/images/first-button-mobile.png"
              alt="Clique aqui e experimente nosso teste de cor virtual"
            />
          </a>
        </Link>
      </div>
    </>
  )
}
