import { CarFront, ChevronDown, Heart, LogOut, UserRoundPen } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Link, useForm } from '@inertiajs/react'
import { FormEvent } from 'react'

const UserDropdown = ({ username }: { username: string }) => {
  const { post } = useForm()

  function logOut(e: FormEvent) {
    e.preventDefault()
    post('/logout')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center justify-center text-sm text-accent">
        Welcome, {username} <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
        {/* todo: add rest of links */}
        <DropdownMenuItem>
          <Link className="text-accent focus:text-accent flex gap-2 items-center" href="#">
            <UserRoundPen className="text-accent" />
            My Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="text-accent focus:text-accent flex gap-2 items-center" href="#">
            <CarFront className="text-accent" />
            My Cars
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="text-accent focus:text-accent flex gap-2 items-center" href="#">
            <Heart className="text-accent" />
            My Favourite Cars
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            className="text-accent focus:text-accent flex gap-2 items-center"
            onClick={logOut}
          >
            <LogOut className="text-accent" />
            Log out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown
