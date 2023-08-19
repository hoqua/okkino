'use client'

import { DesktopSubmenu } from './desktop-submenu'
import { Locale } from '../../../../../i18n/i18n-config'
import { FC } from 'react'
import { ALL_CATEGORY } from '../../../shop/_components/constants'
import Link from 'next/link'

interface IProps {
  navigationTranslation: Record<string, string>
  productCategoriesTranslation: Record<string, string>
  productCategories: { name: string }[]
  locale: Locale
}

export const DesktopMenu: FC<IProps> = (props) => {
  const { locale, navigationTranslation, productCategories, productCategoriesTranslation } = props

  return (
    <div className="flex hidden items-center gap-10 md:flex">
      <DesktopSubmenu
        menuName={navigationTranslation.shop}
        itemsList={[ALL_CATEGORY, ...productCategories.map((category) => category.name)]}
        translations={productCategoriesTranslation}
        getNavigationPath={(itemKeyName) =>
          itemKeyName ? `/${locale}/shop/${itemKeyName}` : `/${locale}/shop`
        }
      />

      <Link className="okkino-text-hover text-xs uppercase text-black" href={`/${locale}/about`}>
        {navigationTranslation.about}
      </Link>
    </div>
  )
}
