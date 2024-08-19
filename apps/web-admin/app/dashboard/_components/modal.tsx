'use client'
import { useState } from 'react'

export default function Modal({
  children,
  btnClassName,
  buttonText,
  buttonCloseText
}: {
  children: React.ReactNode
  btnClassName?: string
  buttonText: string
  buttonCloseText?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button className={btnClassName} onClick={() => setIsOpen(true)}>
        {buttonText}
      </button>
      {isOpen && (
        <div className="fixed w-full z-40 h-full left-0 top-0">
          <div className="fixed bg-black opacity-70 w-full h-full left-0 top-0 z-40"></div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="bg-white max-w-[500px] z-50 flex flex-col gap-2 p-5 mx-auto w-full relative rounded-lg">
              {children}
              <button className="btn w-full" onClick={() => setIsOpen(false)}>
                {buttonCloseText ? buttonCloseText : 'Cancel'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
