import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

import { TextAlignJustifyIcon } from '@radix-ui/react-icons'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from '~/components/ui/sheet'

export function SheetSide() {
  const { data: sessionData } = useSession()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <TextAlignJustifyIcon className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent side="left" className="w-52">
        <SheetHeader>
          <h1 className="text-2xl">App Name</h1>
        </SheetHeader>
        <div className="mt-6 flex flex-col space-y-2">
          <div>
            <SheetClose asChild>
              <Link href="/">Home</Link>
            </SheetClose>
          </div>
          <div>
            <SheetClose asChild>
              <Link href="/category">Category</Link>
            </SheetClose>
          </div>
          <div>
            <SheetClose
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
              {sessionData ? 'Sign out' : 'Sign in'}
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
