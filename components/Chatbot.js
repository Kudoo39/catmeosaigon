'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Chatbot({ isOpen, onToggle }) {
  const inputRef = useRef(null)
  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={onToggle}
        className='
          fixed bottom-6 right-6
          bg-primary-dark text-white
          w-14 h-14 rounded-full
          shadow-2xl hover:bg-primary DEFAULT-light
          transition animate-float
          flex items-center justify-center text-2xl
        '
      >
        <div className='relative w-36 h-12 rounded-lg overflow-hidden'>
          <Image
            src='/chat.jpg'
            alt='Cát Mèo Sài Gòn'
            layout='fill'
            objectFit='contain'
            priority
          />
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className='fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden'>
          <header className='bg-primary-dark text-white px-4 py-3 flex justify-between items-center'>
            <h3 className='text-lg'>Chat với chúng tôi</h3>
            <button onClick={onToggle} className='text-2xl'>
              ×
            </button>
          </header>
          <div className='flex-1 p-4 overflow-y-auto space-y-3'>
            <div className='text-gray-600'>
              Xin chào! Tôi có thể giúp gì cho bạn?
            </div>
          </div>
          <footer className='p-3 bg-gray-100'>
            <div className='flex space-x-2'>
              <input
                ref={inputRef}
                type='text'
                placeholder='Nhập câu hỏi...'
                className='flex-grow p-2 rounded-full border focus:ring-2 focus:ring-primary-dark focus:border-primary-dark'
              />
              <button className='bg-primary-dark text-white p-2 rounded-full'>
                ➤
              </button>
            </div>
          </footer>
        </div>
      )}
    </>
  )
}
