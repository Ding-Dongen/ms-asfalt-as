import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import { LanguageProvider } from './LanguageContext'
import { Home, Briefcase, Mail, Facebook, Menu, X, Image, Globe } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RoadMasters Asfalt',
  description: 'Kvalitetsløsninger i asfalt for alle dine belegningsbehov',
}

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className={`${inter.className} layout`}>
        <LanguageProvider>
          <div className="content-wrapper">
            <Navigation />
            <main>{children}</main>
          </div>
          <footer className="footer">
            <div className="footer-content">
              <p>&copy; 2025 MS Asfalt. Alle rettigheter forbeholdt.</p>
              <a
                href="https://www.facebook.com/MSasfalt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Besøk vår Facebook-side"
              >
                <Facebook size={18} />
                <span>Facebook</span>
              </a>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  )
}

