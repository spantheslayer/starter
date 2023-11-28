import { signIn, signOut, useSession } from 'next-auth/react'

import { TextAlignJustifyIcon } from '@radix-ui/react-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '~/components/ui/dropdown-menu'

export function BurgerMenu() {
  const { data: sessionData } = useSession()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <TextAlignJustifyIcon className="h-8 w-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fill">
        <DropdownMenuGroup>
          <DropdownMenuItem>Home</DropdownMenuItem>
          <DropdownMenuItem>Category</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? 'Sign out' : 'Sign in'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
