import { useSession } from 'next-auth/react'

import LoginButton from '~/lib/loginButton'
import { api } from '~/utils/api'

export default function AuthShowcase() {
  const { data: sessionData } = useSession()

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  )

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <LoginButton />
    </div>
  )
}
