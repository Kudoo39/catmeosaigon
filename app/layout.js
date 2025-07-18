import './globals.css'
import { Poppins, Montserrat } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
  display: 'swap'
})

export const metadata = { title: 'Cát Mèo Sài Gòn' }

export default function RootLayout({ children }) {
  return (
    <html lang='vi' className={poppins.variable}>
      <body className='font-sans'>{children}</body>
    </html>
  )
}
