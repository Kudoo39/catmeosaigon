'use client'

import { useState } from 'react'
import { FaMedal, FaShieldAlt, FaHeadset } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'
import Image from 'next/image'

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const features = [
    {
      Icon: FaMedal,
      title: 'Chất lượng cao',
      text: 'Hạt cát mịn, hút ẩm nhanh, khử mùi vượt trội.'
    },
    {
      Icon: FaShieldAlt,
      title: 'An toàn tuyệt đối',
      text: 'Không hóa chất, thân thiện với mèo và con người.'
    },
    {
      Icon: FaHeadset,
      title: 'Hỗ trợ 24/7',
      text: 'Tư vấn online, giải đáp ngay lập tức kể cả ngày lễ.'
    }
  ]

  return (
    <>
      <Header />

      {/* Hero */}
      <section
        id='trang-chinh'
        className='relative h-screen flex items-center justify-center bg-primary-light overflow-hidden'
      >
        {/* Background image (opacity overlay) */}
        <div
          className='absolute inset-0 bg-cover bg-center opacity-30'
          style={{ backgroundImage: "url('/hero-back.jpg')" }}
        />

        <div className='relative z-10 text-center px-6'>
          <h1 className='text-5xl md:text-7xl font-bold text-primary-dark mb-4 leading-tight'>
            Cát Mèo Sài Gòn
          </h1>
          <p className='text-lg md:text-2xl mb-8 text-primary-dark/80 font-medium'>
            Cung cấp cát mèo chất lượng & thân thiện với môi trường
          </p>
          <a
            href='#dich-vu'
            className='
        inline-block
        bg-gradient-to-r from-cyan-800 to-blue-800
        text-white font-medium
        px-8 py-3 rounded-full
        shadow-md hover:shadow-lg
        transition transform hover:-translate-y-1
      '
          >
            Khám phá dịch vụ
          </a>
        </div>
      </section>

      <main className='flex-grow'>
        {/* Why Choose Us */}
        <section id='tai-sao' className='py-20 px-4 container mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-8'>
            Tại sao chọn Cát Mèo Sài Gòn?
          </h2>
          <div className='grid gap-8 md:grid-cols-3'>
            {features.map(({ Icon, title, text }) => (
              <div key={title} className='text-center'>
                {/* render icon component */}
                <Icon
                  className='mx-auto mb-4 text-primary-dark'
                  size={64} // hoặc size="4rem"
                />
                <h3 className='text-xl font-semibold mb-2'>{title}</h3>
                <p className='text-gray-600'>{text}</p>
              </div>
            ))}
          </div>
        </section>
        {/* About */}
        <section
          id='chung-toi'
          className='py-20 bg-gradient-to-r from-cyan-700/20 to-blue-900/20'
        >
          <h2 className='text-4xl font-bold mb-6 text-cyan-800 text-center'>
            Chúng tôi
          </h2>
          <p className='max-w-2xl mx-auto text-cyan-900/90 leading-relaxed text-center px-4'>
            Với hơn 5 năm kinh nghiệm, Cát Mèo Sài Gòn tự hào mang đến cát chất
            lượng cao, hút ẩm nhanh, khử mùi hiệu quả. Giao hàng nhanh – Hỗ trợ
            24/7.
          </p>
        </section>

        {/* Services */}
        <section id='dich-vu' className='py-20 bg-white'>
          <div className='container mx-auto px-4 text-center mb-12'>
            <h2 className='text-4xl font-bold'>Dịch vụ</h2>
          </div>
          <div className='container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {[
              {
                title: 'Cát Mèo 30kg',
                desc: 'Hút ẩm 5s, không bụi',
                price: '135.000₫/bao'
              },
              {
                title: 'Chai Khử Mùi',
                desc: 'Khử mùi dạng hạt lavender / hạt cafe (500g)',
                price: '20.000₫/chai'
              },
              {
                title: 'Giao Hàng Miễn Phí',
                desc: 'Bán kính 2km - TP.HCM',
                price: 'Miễn phí'
              },
              {
                title: 'Giao Hàng Các Tỉnh',
                desc: 'Vui lòng liên hệ để biết thêm chi tiết',
                price: 'Thương lượng'
              }
            ].map((item) => (
              <div
                key={item.title}
                className='
                  bg-white p-6 rounded-2xl
                  shadow-md hover:shadow-2xl
                  transform hover:-translate-y-2
                  transition
                '
              >
                <h3 className='text-2xl font-semibold mb-2'>{item.title}</h3>
                <p className='text-gray-600 mb-4'>{item.desc}</p>
                <span className='text-primary-dark font-bold text-xl'>
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          id='testimonials'
          className='py-20 bg-gradient-to-r from-cyan-700/20 to-blue-900/20'
        >
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold text-center mb-8 text-cyan-800'>
              Khách hàng nói gì?
            </h2>
            <div className='space-y-8 max-w-2xl mx-auto'>
              {[
                {
                  quote:
                    '“Cát Mèo Sài Gòn thật sự khác biệt – mèo nhà tôi không còn mùi khó chịu nữa!”',
                  author: '— Nguyễn Văn A, Pet Lover'
                },
                {
                  quote: '“Giá cả hợp lý, giao hàng nhanh, dịch vụ chu đáo.”',
                  author: '— Trần Thị B, Sinh viên'
                }
              ].map((t, i) => (
                <blockquote
                  key={i}
                  className='p-6 bg-white/80 rounded-xl shadow-sm'
                >
                  <p className='text-cyan-900/90 mb-4'>{t.quote}</p>
                  <footer className='text-sm text-cyan-800/60'>
                    {t.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id='lien-he' className='py-20 px-4 bg-primary-light'>
          <div className='container mx-auto max-w-2xl'>
            <h2 className='text-4xl font-bold text-center mb-8'>Liên hệ</h2>
            <form className='space-y-6'>
              <input
                type='text'
                placeholder='Họ tên'
                className='w-full p-4 border rounded-lg focus:ring-2 focus:ring-primary-dark'
              />
              <input
                type='email'
                placeholder='Email'
                className='w-full p-4 border rounded-lg focus:ring-2 focus:ring-primary-dark'
              />
              <textarea
                rows='4'
                placeholder='Nội dung'
                className='w-full p-4 border rounded-lg focus:ring-2 focus:ring-primary-dark'
              ></textarea>
              <button
                type='submit'
                className='
                  w-full  bg-gradient-to-r from-cyan-300 to-blue-300 text-black
                  py-3 rounded-full shadow-lg
                  hover:shadow-2xl transition
                  transform hover:-translate-y-1
                '
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot isOpen={isChatOpen} onToggle={() => setIsChatOpen((o) => !o)} />
    </>
  )
}
