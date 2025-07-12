import { ChevronDown } from 'lucide-react'
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

  function submit(e: FormEvent) {
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
        <DropdownMenuItem className="text-accent focus:text-accent">
          <Link href="#">My Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-accent focus:text-accent">
          <Link href="#">My Cars</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-accent focus:text-accent">
          <Link href="#">My Favourite Cars</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-accent focus:text-accent">
          <button onClick={submit}>Log out</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown
