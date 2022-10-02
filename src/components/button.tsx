import Link from 'next/link'

export const KolestonButton = (props) => {
  const { buttonText } = props
  return (
    <div className="uppercase max-w-[600px] text-center font-bold">
      <Link href="http://www.google">
        <a> {buttonText} </a>
      </Link>
    </div>
  )
}
