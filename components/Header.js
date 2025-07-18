'use client'
export default function Header() {
  return (
    <header className='fixed top-0 w-full bg-white/60 backdrop-blur-md z-50 shadow-sm'>
      <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        <div className='text-2xl font-extrabold text-primary-dark'>Cát Mèo</div>
        <ul className='flex space-x-6'>
          {[
            { id: 'home', label: 'Trang chính' },
            { id: 'about', label: 'Chúng tôi' },
            { id: 'services', label: 'Dịch vụ' },
            { id: 'contact', label: 'Liên hệ' }
          ].map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className='
                  uppercase tracking-wide text-gray-700
                  group relative
                  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 group-hover:after:w-full
                  after:bg-primary-dark after:transition-all
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
