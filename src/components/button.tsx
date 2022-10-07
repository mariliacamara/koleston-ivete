import Link from 'next/link'

interface Props {
  buttonText: string
  url: string
}

export const KolestonButton = (props: Props) => {
  const { buttonText, url } = props
  return (
    <div className="koleston-button uppercase md:max-w-[600px] text-center font-bold text-grad p-10 text-xl md:text-3xl">
      <Link href={url}>
        <a dangerouslySetInnerHTML={{ __html: buttonText }}></a>
      </Link>
    </div>
  )
}
