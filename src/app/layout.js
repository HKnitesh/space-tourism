import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Space Tourism',
  description: 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!',
  icons: {
    icon:'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431529/spaceturism_assets/favicon-32x32_hl9wx0.png',
    apple:'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431529/spaceturism_assets/favicon-32x32_hl9wx0.png',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}