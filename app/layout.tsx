import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Blog Summarizer - Transform Content with Intelligence",
  description:
    "Advanced AI-powered blog summarization with instant Urdu translation. Experience the future of content consumption.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="relative z-20 border-b border-white/10 bg-black/20 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <span className="text-white font-semibold text-lg">Blog Summarizer</span>
                </div>

                <div className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
                  <span className="px-3 py-1 bg-white/10 rounded-full border border-white/20">v2.0</span>
                </div>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="relative z-20 border-t border-white/10 bg-black/20 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AI</span>
                  </div>
                  <span className="text-slate-300 text-sm">© 2024 Usman Khurshid. Powered by Advanced AI.</span>
                </div>

                <div className="flex items-center gap-6 text-xs text-slate-400">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    AI Online
                  </span>
                  <span>Built with Next.js</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
