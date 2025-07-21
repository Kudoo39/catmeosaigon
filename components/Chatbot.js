'use client'

import { useState, useRef, useEffect } from 'react'
import { FiX, FiLoader } from 'react-icons/fi'
import Image from 'next/image'

export default function Chatbot() {
  const [open, setOpen] = useState(true)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Chào bạn! Mình có thể giúp gì hôm nay?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEnd = useRef(null)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const handleSend = async () => {
    const text = input.trim()
    if (!text || loading) return

    // 1) Đưa tin user lên
    setMessages((prev) => [...prev, { from: 'user', text }])
    setInput('')

    // 2) Bật loading & thêm bubble spinner
    setLoading(true)
    setMessages((prev) => [...prev, { from: 'bot', loading: true }])

    try {
      // Gọi API thật
      const res = await fetch(process.env.NEXT_PUBLIC_CHATBOT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ query: text }).toString()
      })
      if (!res.ok) throw new Error(`Status ${res.status}`)
      const { answer } = await res.json()

      // 3) Thay bubble spinner bằng câu trả lời
      setMessages((prev) => {
        // loại bỏ bubble loading cuối
        const withoutLoading = prev.filter((msg) => !msg.loading)
        return [...withoutLoading, { from: 'bot', text: answer }]
      })
    } catch (err) {
      console.error(err)
      setMessages((prev) => {
        const withoutLoading = prev.filter((msg) => !msg.loading)
        return [
          ...withoutLoading,
          { from: 'bot', text: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau.' }
        ]
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='fixed bottom-6 right-6 z-50'>
      {/* Toggle Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform'
          aria-label='Open chat'
        >
          <Image src='/chat.jpg' alt='Chat' width={60} height={60} priority />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className='flex flex-col w-80 h-120 bg-white rounded-xl shadow-2xl overflow-hidden'>
          {/* Header */}
          <div className='flex items-center justify-between px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500'>
            <h3 className='text-white font-semibold'>Hỗ trợ trực tuyến</h3>
            <button onClick={() => setOpen(false)} className='text-white'>
              <FiX size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className='flex-1 p-3 overflow-auto bg-gray-50'>
            {messages.map((msg, idx) => {
              // Loading bubble
              if (msg.loading) {
                return (
                  <div key='loading' className='text-left mb-2'>
                    <div className='inline-flex items-center bg-white p-2 rounded-2xl rounded-bl-none shadow-sm'>
                      <FiLoader className='animate-spin text-gray-500' />
                      <span className='ml-2 text-gray-500'>
                        Đang trả lời...
                      </span>
                    </div>
                  </div>
                )
              }
              // Normal message
              const isUser = msg.from === 'user'
              return (
                <div
                  key={idx}
                  className={isUser ? 'text-right mb-2' : 'text-left mb-2'}
                >
                  <div
                    className={
                      isUser
                        ? 'inline-block bg-gradient-to-r from-blue-200 to-cyan-200 text-gray-800 p-2 rounded-2xl rounded-br-none max-w-xs break-words'
                        : 'inline-block bg-white p-2 rounded-2xl rounded-bl-none max-w-xs break-words shadow-sm'
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              )
            })}
            <div ref={messagesEnd} />
          </div>

          {/* Input */}
          <div className='flex p-2 border-t border-gray-200'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={loading}
              className='flex-1 px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50'
              placeholder='Nhập tin nhắn...'
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className='ml-2 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg transition-shadow disabled:opacity-50'
            >
              {loading ? <FiLoader className='animate-spin' /> : 'Gửi'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
