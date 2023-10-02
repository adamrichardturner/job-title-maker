import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Linkedin Bio Generator | Adam Turner',
  description:
    'A Linkedin Bio Generator producing humorous yet accurate summaries of your job title.',
  keywords: ['Linkedin Bio Generator', 'Job Title Generator', 'Linkedin Bio'],
  openGraph: {
    images: 'https://linkedin-bio.vercel.app/social-preview.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
