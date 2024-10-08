import { useRouter } from 'next/navigation'
import { Button } from '../../_shared/button'

const t = {
  empty: {
    title: 'Your cart is empty',
    buttonText: 'Continue Shopping'
  }
}

export default function CartEmpty() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/shop/all')
  }

  return (
    <div
      className={
        'flex flex-col items-center  justify-center gap-20 ' +
        'h-[calc(100vh-5.5rem)] md:h-[calc(100vh-7.5rem)] lg:h-[calc(100vh-18rem)]'
      }
    >
      <h1 className="uppercase">{t.empty.title}</h1>

      <Button label={t.empty.buttonText} onClick={handleClick} />
    </div>
  )
}
