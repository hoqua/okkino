import { Section, Text, Link } from '@react-email/components'

export function Footer() {
  return (
    <Section className="text-center">
      <Text className="m-0 text-xs text-gray-600">For any inquiries, please contact us</Text>
      <Link className="text-xs text-gray-600 underline" href="mailto:someone@example.com">
        okkinostudio@blabla
      </Link>
    </Section>
  )
}
