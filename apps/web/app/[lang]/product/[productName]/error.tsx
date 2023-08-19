'use client' // Error components must be Client Components

import ErrorComponent from '../../../_shared/error-component'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return <ErrorComponent onClick={reset} />
}
