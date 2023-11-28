import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { type AppType } from 'next/app'

import Header from '~/components/header'
import font from '~/lib/fonts/font'
import { ThemeProvider } from '~/lib/theme-provider'
import '~/styles/globals.css'
import { api } from '~/utils/api'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <style jsx global>{`
        body {
          font-family: ${font.style.fontFamily};
        }
      `}</style>

      <SessionProvider session={session}>
        <div className="px-2 sm:px-8 lg:px-40">
          <Header />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default api.withTRPC(MyApp)
