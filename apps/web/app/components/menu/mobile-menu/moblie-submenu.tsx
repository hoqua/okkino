'use client'

import { FC } from 'react'
import Link from 'next/link'
import { ProductCategories } from '../contants'

interface ISubmenuProps {
  itemsList: string[]
  onSubmenuClick: () => void
  getNavigationPath: (itemKeyName: string) => string
}

export const MobileSubmenu: FC<ISubmenuProps> = (props) => {
  const { itemsList, onSubmenuClick, getNavigationPath } = props

  return (
    <div className="absolute -top-8 left-44 z-10">
      <ul>
        {itemsList.map((itemKeyName, index) => (
          <li
            key={itemKeyName}
            className="okkino-text-hover relative mb-8 mt-8 flex items-center whitespace-nowrap text-xs uppercase tracking-wide"
          >
            {index === 0 && (
              <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -left-10"
              >
                <path d="M3.82759 1L1.00015 3.82744L3.82956 6.65685" stroke="#262217" />
              </svg>
            )}

            <Link href={getNavigationPath(itemKeyName)} onClick={onSubmenuClick}>
              {ProductCategories[itemKeyName]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
