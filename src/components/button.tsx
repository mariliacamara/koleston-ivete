import Link from 'next/link'

interface Props {
  buttonText: string
}

export const KolestonButton = (props: Props) => {
  const { buttonText } = props
  return (
    <div className="uppercase max-w-[600px] text-center font-bold">
      <Link href="http://www.google">
        <a dangerouslySetInnerHTML={{ __html: buttonText }}></a>
      </Link>
    </div>
  )
}
