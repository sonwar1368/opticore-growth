import './globals.css'

export const metadata = {
  title: 'OptiCore - AI-Powered DevOps Growth Solutions',
  description: 'Accelerate Your DevOps Growth with AI Precision',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
