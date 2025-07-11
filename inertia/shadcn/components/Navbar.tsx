import { Link } from '@inertiajs/react'
import { CirclePlus, LogIn, UserRound } from 'lucide-react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow z-10">
      <div className="container mx-auto px-20 py-6 flex items-center justify-between">
        <Link href="/">
          <img src="/storage/logo.svg" alt="Auto Hunt Logo" className="h-6" />
        </Link>
        <div className="flex items-center justify-center gap-4">
          {/* todo: add link to add new car */}
          <Link href="#">
            <Button className="bg-transparent border border-accent text-accent rounded-full hover:bg-accent hover:text-white">
              <CirclePlus />
              Add new Car
            </Button>
          </Link>
          {/* todo: add auth state */}
          <Link href="/register">
            <Button className="bg-accent rounded-full hover:bg-accent/80">
              <UserRound />
              Register
            </Button>
          </Link>
          <Link href="/login">
            <Button className="border border-transparent rounded-full bg-transparent text-accent shadow-none hover:bg-transparent hover:border-accent">
              <LogIn />
              Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
