import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CareerPath AI - Your AI-Powered Career Guide',
  description: 'Get personalized career guidance, roadmaps, and resume analysis powered by AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
          card: 'shadow-lg border border-gray-200',
        },
        signUp: {
          elements: {
            phoneInputBox: { display: 'none' },
            phoneInput: { display: 'none' },
          },
        },
        signIn: {
          elements: {
            phoneInputBox: { display: 'none' },
            phoneInput: { display: 'none' },
          },
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <header className="fixed top-0 right-0 z-50 p-4">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}