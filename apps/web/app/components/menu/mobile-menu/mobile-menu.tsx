'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MobileSubmenu } from './moblie-submenu'

enum Submenu {
  Shop = 'shop'
}

interface IProps {
  productCategories: { name: string }[]
}

export default function MobileMenu(props: IProps) {
  const { productCategories } = props
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<Submenu | null>(null)

  const changeActiveSubmenu = (submenu: Submenu) => {
    setActiveSubmenu(submenu)
  }

  const handleSubmenuClick = () => {
    setIsOpen(false)
    setActiveSubmenu(null)
  }

  return (
    <>
      <span
        className="cursor-pointer text-xs uppercase text-black md:hidden"
        onClick={() => setIsOpen(true)}
      >
        Menu
      </span>

      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-10  bg-white">
          <div className="relative flex h-full w-full items-center p-6">
            <ul>
              <li
                className={getActiveSubmenuClasses(Submenu.Shop, activeSubmenu)}
                onClick={() => changeActiveSubmenu(Submenu.Shop)}
              >
                Shop
                {Submenu.Shop === activeSubmenu && (
                  <MobileSubmenu
                    itemsList={productCategories.map((category) => category.name)}
                    onSubmenuClick={handleSubmenuClick}
                    getNavigationPath={(itemKeyName) => `/shop/${itemKeyName}`}
                  />
                )}
              </li>

              <Link
                className="okkino-text-hover text-xs uppercase text-black"
                href={`/about`}
                onClick={handleSubmenuClick}
              >
                About
              </Link>
            </ul>

            <button
              aria-label="Close Menu"
              className="absolute right-6 top-6"
              onClick={() => setIsOpen(false)}
            >
              &#10005;
            </button>

            <Link href={`/`} className="absolute bottom-6 left-6" onClick={() => setIsOpen(false)}>
              <Image
                src={'/logo.svg'}
                width={85}
                height={15}
                alt={'logo'}
                className="md:h-5 md:w-28"
              />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

const getActiveSubmenuClasses = (givenSubmenu?: Submenu, activeSubmenu?: Submenu | null) => {
  let baseClasses =
    'text-xs uppercase tracking-wide cursor-pointer mb-8 mt-8 transition-color duration-300 ease-in-out relative'

  if (!activeSubmenu) {
    baseClasses += ' text-black'
    return baseClasses
  }

  if (givenSubmenu !== activeSubmenu) {
    baseClasses += ' text-gray-200'
    return baseClasses
  }

  baseClasses += ' text-black'

  return baseClasses
}
