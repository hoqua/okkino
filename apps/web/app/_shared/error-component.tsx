import Image from 'next/image'
import { Button } from './button'

export default function ErrorComponent({ onClick }: { onClick?: () => void }) {
  return (
    <div className="m-4 flex h-full min-h-[400px] flex-col items-center justify-center border-2 border-dashed border-black">
      <Image
        src={'/logo.svg'}
        width={85}
        height={15}
        alt={'logo'}
        className="-scale-100 md:h-5 md:w-28"
      />

      <div className="h-10" />

      <p className="text-base uppercase text-black">Something went wrong</p>

      <div className="h-20" />

      <Button label="try again" onClick={onClick} />
    </div>
  )
}
