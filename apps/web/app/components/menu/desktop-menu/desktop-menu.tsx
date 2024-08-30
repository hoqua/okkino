'use client'

import { DesktopSubmenu } from './desktop-submenu'
import { FC } from 'react'
import { ALL_CATEGORY } from '../../../shop/_components/constants'
import Link from 'next/link'

interface IProps {
  productCategories: { name: string }[]
}

export const DesktopMenu: FC<IProps> = (props) => {
  const { productCategories } = props

  return (
    <div className="flex hidden items-center gap-10 md:flex">
      <DesktopSubmenu
        menuName="Shop"
        itemsList={[ALL_CATEGORY, ...productCategories.map((category) => category.name)]}
        getNavigationPath={(itemKeyName) => (itemKeyName ? `/shop/${itemKeyName}` : `/shop`)}
      />

      <Link className="okkino-text-hover text-xs uppercase text-black" href={`/about`}>
        About
      </Link>
      <Link className="okkino-text-hover text-xs uppercase text-black" href={`/contact`}>
        Contacts
      </Link>
    </div>
  )
}
