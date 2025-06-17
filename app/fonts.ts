import localFont from 'next/font/local'
import { Azeret_Mono } from 'next/font/google'

export const geistSans = localFont({
  src: '../public/fonts/GeistSans-Regular.woff2',
  weight: '400',
  variable: '--font-geist-sans',
})

export const azeretMono = Azeret_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-azeret-mono',
})

