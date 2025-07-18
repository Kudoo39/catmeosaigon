'use client'
import Image from 'next/image'

const LINKS = [
  { slug: 'trang-chinh', label: 'Trang chính' },
  { slug: 'chung-toi', label: 'Chúng tôi' },
  { slug: 'dich-vu', label: 'Dịch vụ' },
  { slug: 'lien-he', label: 'Liên hệ' }
]

export default function Header() {
  return (
    <header className='fixed top-0 w-full bg-white/60 backdrop-blur-md z-50 shadow-sm'>
      <nav className='container mx-auto flex items-center justify-between py-3 px-4'>
        {/* Logo */}
        <div className='relative w-36 h-12 rounded-lg overflow-hidden'>
          <Image
            src='/catmeo.jpg'
            alt='Cát Mèo Sài Gòn'
            layout='fill'
            objectFit='contain'
            priority
          />
        </div>

        {/* Menu */}
        <ul className='flex space-x-4'>
          {LINKS.map((link) => (
            <li key={link.slug}>
              <a
                href={`#${link.slug}`}
                className='
                  uppercase tracking-wide text-gray-700
                  group relative
                  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0
                  group-hover:after:w-full after:bg-primary-dark after:transition-all
                  transition-colors hover:text-primary-dark
                '
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
