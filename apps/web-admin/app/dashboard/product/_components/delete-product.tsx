import { useState, useTransition } from 'react'
import { deleteProduct } from '../../../action'
import { useRouter } from 'next/navigation'

export default function DeleteProduct(props: { id: string; name: string }) {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  function handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    startTransition(async () => {
      await deleteProduct(props.id, props.name)
      setOpen(false)
      router.push('/dashboard')
    })
  }

  return (
    <>
      <button
        className="btn btn-warning"
        onClick={(e) => {
          // form above catches the click event and saves product
          e.preventDefault()
          setOpen(true)
        }}
      >
        DELETE
      </button>
      <dialog className="modal" open={open}>
        <div className="modal-box">
          <h3 className="text-lg font-bold">Delete</h3>
          <p className="py-4">Sure want to delete?</p>
          <div className="modal-action">
            <button className="btn btn-warning" onClick={handleDelete}>
              {isPending && <span className="loading loading-spinner"></span>}
              delete
            </button>
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault()

                setOpen(false)
              }}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
