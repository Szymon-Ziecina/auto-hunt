import {
  CarFront,
  CirclePlus,
  Heart,
  LogIn,
  LogOut,
  Menu,
  UserRound,
  UserRoundPen,
} from 'lucide-react'
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { FormEvent, useState } from 'react'
import { Link, useForm, usePage } from '@inertiajs/react'
import { SharedProps } from '@adonisjs/inertia/types'

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)
  const page = usePage<SharedProps>()
  const { post } = useForm()

  function logOut(e: FormEvent) {
    e.preventDefault()
    post('/logout')
  }

  return (
    <>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        className="absolute right-20 top-5 bg-background-light text-black hover:bg-background-light/80 z-20"
      >
        <Menu />
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full bg-white z-10 flex flex-col gap-2 py-4 px-20 shadow-md"
          >
            {/* todo: add link to add new car */}
            <Link href="#" className="w-full">
              <Button className="bg-transparent border border-accent text-accent rounded-full hover:bg-accent hover:text-white w-full">
                <CirclePlus className="mr-2" />
                Add new Car
              </Button>
            </Link>

            {!page.props.user ? (
              <>
                <Link href="/register" className="w-full">
                  <Button className="bg-accent rounded-full hover:bg-accent/80 w-full">
                    <UserRound className="mr-2" />
                    Register
                  </Button>
                </Link>
                <Link href="/login" className="w-full">
                  <Button className="bg-transparent border border-accent text-accent rounded-full hover:bg-accent hover:text-white w-full">
                    <LogIn className="mr-2" />
                    Login
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="#" className="w-full">
                  <Button className="bg-transparent border border-accent text-accent rounded-full hover:bg-accent hover:text-white w-full">
                    <UserRoundPen />
                    My Profile
                  </Button>
                </Link>
                <Link href="#" className="w-full">
                  <Button className="bg-transparent border border-accent text-accent rounded-full hover:bg-accent hover:text-white w-full">
                    <CarFront />
                    My Cars
                  </Button>
                </Link>
                <Link href="#" className="w-full">
                  <Button className="bg-transparent border border-accent text-accent rounded-full hover:bg-accent hover:text-white w-full">
                    <Heart />
                    My Favourite Cars
                  </Button>
                </Link>
                <Button
                  onClick={logOut}
                  className="bg-transparent border border-accent text-accent rounded-full hover:bg-accent hover:text-white w-full"
                >
                  <LogOut />
                  Log out
                </Button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNavbar
