import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "./components/Navigation"
import { LanguageProvider } from "./LanguageContext"
import Footer from "./sections/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MS Asfalt",
  description: "Kvalitetsløsninger i asfalt for alle dine belegningsbehov",
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
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
