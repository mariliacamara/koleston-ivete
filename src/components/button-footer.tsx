import Link from 'next/link'

interface Props {
  url: string
}

export const KolestonButtonFooter = (props: Props) => {
  const { url } = props
  return (
    <div className="md:max-w-[600px] text-center">
      <Link href={url}>
        <a>
          <img src="/assets/images/button-img.png" alt="" />
        </a>
      </Link>
    </div>
  )
}
