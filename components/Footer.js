import { FiFacebook, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className='bg-gradient-to-r from-cyan-700 to-blue-900 text-white pt-16 pb-8'>
      {/* 4 Columns */}
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 px-6'>
        {/* About */}
        <div>
          <h4 className='text-cyan-200 font-semibold mb-4 text-lg'>
            Giới thiệu
          </h4>
          <p className='text-cyan-100/80'>
            Cát Mèo Sài Gòn – Uy tín hàng đầu, chất lượng cam kết.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className='text-cyan-200 font-semibold mb-4 text-lg'>Dịch vụ</h4>
          <ul className='space-y-2'>
            {['Cát mèo 30kg', 'Chai khử mùi', 'Miễn phí ship 2km'].map(
              (svc) => (
                <li key={svc}>
                  <a
                    href='#services'
                    className='text-cyan-100/80 hover:text-white transition'
                  >
                    {svc}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h4 className='text-cyan-200 font-semibold mb-4 text-lg'>Theo dõi</h4>
          <ul className='space-y-2'>
            <li>
              <a
                href='https://www.facebook.com/hoang.phi.696205'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-cyan-100/80 hover:text-white transition'
              >
                <FiFacebook className='mr-2 text-xl' /> Facebook
              </a>
            </li>
            <li>
              <a
                href='https://www.tiktok.com/@catmeosaigon30kg'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-cyan-100/80 hover:text-white transition'
              >
                <SiTiktok className='mr-2 text-xl' /> TikTok
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className='text-cyan-200 font-semibold mb-4 text-lg'>Liên hệ</h4>
          <address className='not-italic space-y-2 text-cyan-100/80'>
            {/* Địa chỉ */}
            <p className='flex items-center'>
              <FiMapPin className='mr-2 text-xl' />
              118/24/11/4 Liên Khu 5-6, Phường Bình Hưng Hòa B, Quận Bình Tân
            </p>
            {/* Điện thoại */}
            <p className='flex items-center'>
              <FiPhone className='mr-2 text-xl' />
              <a href='tel:+84919875163' className='hover:text-white'>
                +84 919‑875‑163
              </a>
            </p>
            {/* Email */}
            <p className='flex items-center'>
              <FiMail className='mr-2 text-xl' />
              <a
                href='mailto:phinguyen2413@gmail.com'
                className='hover:text-white'
              >
                phinguyen2413@gmail.com
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Copyright */}
      <div className='text-center text-cyan-100/70 mt-8 text-sm'>
        © 2025 Cát Mèo Sài Gòn. All rights reserved.
      </div>
    </footer>
  )
}
