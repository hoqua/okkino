'use client'
import { useTransition } from 'react'
import { redeploy } from '../../action'

export default function UpdateSiteBtn() {
  const [isPending, startTransition] = useTransition()

  function updateSite() {
    startTransition(async () => {
      await redeploy()
    })
  }
  return (
    <button className="btn" onClick={updateSite}>
      {isPending && <span className="loading loading-spinner"></span>}
      update site
    </button>
  )
}
