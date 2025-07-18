import './globals.css'

export const metadata = { title: 'Cát Mèo Sài Gòn' }

export default function RootLayout({ children }) {
  return (
    <html lang='vi'>
      <body className='flex flex-col min-h-screen bg-gray-50 text-gray-700'>
        {children}
      </body>
    </html>
  )
}
