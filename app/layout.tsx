import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#313338]">
          <Navigation />
          {children}
      	  <Footer />
        </div>
      </body>
    </html>
  )
}
