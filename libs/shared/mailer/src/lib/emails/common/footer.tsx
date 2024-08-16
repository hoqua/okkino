import { Section, Text, Link } from '@react-email/components'

export function Footer({ cancel = false }: { cancel?: boolean }) {
  return (
    <Section className="text-center">
      <Text className="m-0 text-xs text-gray-600">
        {cancel
          ? 'For any inquiries, please contact us'
          : 'The refund of the paid amount will be processed shortly. For any inquiries, please contact us'}
      </Text>
      <Link className="text-xs text-gray-600 underline" href="mailto:contact@studiookkino.com">
        contact@studiookkino.com
      </Link>
    </Section>
  )
}
