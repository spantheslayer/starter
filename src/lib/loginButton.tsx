import { signIn, signOut, useSession } from 'next-auth/react'

import { Button } from '~/components/ui/button'

export default function LoginButton() {
  const { data: sessionData } = useSession()
  return (
    <Button onClick={sessionData ? () => void signOut() : () => void signIn()}>
      {sessionData ? 'Sign out' : 'Sign in'}
    </Button>
  )
}
