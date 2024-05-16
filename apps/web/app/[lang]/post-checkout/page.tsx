import PostCheckoutPageContent from './page-content'
import { Suspense } from 'react'

export default async function PostCheckoutPage() {
  return (
    <Suspense>
      <PostCheckoutPageContent />
    </Suspense>
  )
}
