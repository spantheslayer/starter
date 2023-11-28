import { SheetSide } from './sideMenu'
import LoginButton from '~/lib/loginButton'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4">
      <div className="hidden gap-x-3 md:flex">
        <LoginButton />
      </div>
      <div>
        <SheetSide />
      </div>
    </header>
  )
}
