'use client'

import { Locale } from '../../../../i18n/i18n-config'
import { FC } from 'react'
import Link from 'next/link'

interface IProps {
  navigationTranslation: Record<string, string>
  locale: Locale
}

export const AboutLink: FC<IProps> = (props) => {
  const { locale, navigationTranslation } = props

  return (
    <Link href={`/${locale}/about`}>
      <div className="flex items-center gap-10 md:block">
        <span className="okkino-text-hover text-xs uppercase text-black">
          {navigationTranslation.about}
        </span>
      </div>
    </Link>
  )
}
