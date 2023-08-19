'use client'

import Link from 'next/link'
import { FC, useState } from 'react'
import { getTranslationSafe } from '../../common/utils'

interface IProps {
  menuName: string
  itemsList: string[]
  translations: Record<string, string>
  getNavigationPath: (itemKeyName?: string) => string
}

export const DesktopSubmenu: FC<IProps> = (props) => {
  const { menuName, itemsList, translations, getNavigationPath } = props
  const [activeClasses, setClasses] = useState('opacity-0 -z-10')

  const handleMouseEnter = () => {
    setClasses('opacity-100 z-10')
  }

  const handleMouseLeave = () => {
    setClasses('opacity-0 -z-10')
  }

  return (
    <span
      className="relative cursor-pointer whitespace-nowrap text-xs uppercase text-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={getNavigationPath()} className="okkino-text-hover text-xs uppercase text-black">
        {menuName}
      </Link>

      <div
        className={
          'transition-{opacity} absolute  h-0 w-full duration-300 ease-in-out' + ' ' + activeClasses
        }
      >
        <ul>
          {itemsList.map((itemKeyName) => (
            <li
              key={itemKeyName}
              className="transition-color okkino-text-hover relative  mb-4 mt-4 text-xs uppercase tracking-wide"
            >
              <Link href={getNavigationPath(itemKeyName)}>
                {getTranslationSafe(translations, itemKeyName)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </span>
  )
}
