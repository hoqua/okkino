import PostCheckoutPageContent from './page-content'
import { Suspense } from 'react'

export const dynamic = 'force-static'

export default async function PostCheckoutPage() {
  return (
    <Suspense>
      <PostCheckoutPageContent />
    </Suspense>
  )
}
