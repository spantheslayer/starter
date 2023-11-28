import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { type AppType } from 'next/app'

import font from '~/lib/fonts/font'
import '~/styles/globals.css'
import { api } from '~/utils/api'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default api.withTRPC(MyApp)
