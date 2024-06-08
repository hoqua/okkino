'use client'
import ErrorComponent from '../../_shared/error-component'

// Error components must be Client Components

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return <ErrorComponent onClick={reset} />
}
