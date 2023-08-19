export function objectToString(obj: any) {
  const parts = []

  for (const key in obj) {
    if (obj[key]) {
      parts.push(obj[key])
    }
  }

  return parts.join(', ')
}
