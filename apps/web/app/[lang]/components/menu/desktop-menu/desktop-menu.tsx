'use client'

import { DesktopSubmenu } from './desktop-submenu'
import { GetProductCategoriesQuery} from '@okkino/web/data-access-graphql'
import { Locale } from '../../../../../i18n/i18n-config'
import { FC } from 'react'
import { ALL_CATEGORY } from '../../../shop/[category]/constants'

interface IProps {
  navigationTranslation: Record<string, string>
  productCategoriesTranslation: Record<string, string>
  productCategories: GetProductCategoriesQuery['productCategories']
  locale: Locale
}

export const DesktopMenu: FC<IProps> = (props) => {
  const { locale, navigationTranslation, productCategories, productCategoriesTranslation } = props

  return (
    <div className="flex hidden items-center gap-10 md:block">
      <DesktopSubmenu
        menuName={navigationTranslation.shop}
        itemsList={[ALL_CATEGORY, ...productCategories.map((category) => category.name)]}
        translations={productCategoriesTranslation}
        getNavigationPath={(itemKeyName) => `/${locale}/shop/${itemKeyName}`}
      />
    </div>
  )
}
