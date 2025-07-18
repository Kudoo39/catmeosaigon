import { useState, useRef, useEffect } from 'react'
import { FiMessageSquare, FiX } from 'react-icons/fi'
import Image from 'next/image'

export default function Chatbot() {
  const [open, setOpen] = useState(true)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Chào bạn! Mình có thể giúp gì hôm nay?' }
  ])
  const [input, setInput] = useState('')
  const messagesEnd = useRef(null)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg = { from: 'user', text: input.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: 'Mình đã nhận được yêu cầu của bạn!' }
      ])
    }, 800)
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
        <div className='flex flex-col w-80 h-96 bg-white rounded-xl shadow-2xl overflow-hidden'>
          {/* Header */}
          <div className='flex items-center justify-between px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500'>
            <h3 className='text-white font-semibold'>Hỗ trợ trực tuyến</h3>
            <button onClick={() => setOpen(false)} className='text-white'>
              <FiX size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className='flex-1 p-3 overflow-auto bg-gray-50'>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.from === 'user' ? 'text-right' : 'text-left'}
              >
                <div
                  className={
                    msg.from === 'user'
                      ? 'inline-block bg-gradient-to-r from-blue-200 to-cyan-200 text-gray-800 p-2 rounded-2xl rounded-br-none max-w-xs break-words'
                      : 'inline-block bg-white p-2 rounded-2xl rounded-bl-none max-w-xs break-words shadow-sm'
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEnd} />
          </div>

          {/* Input */}
          <div className='flex p-2 border-t border-gray-200'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className='flex-1 px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500'
              placeholder='Nhập tin nhắn...'
            />
            <button
              onClick={handleSend}
              className='ml-2 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg transition-shadow'
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
