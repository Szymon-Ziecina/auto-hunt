import { Head, Link, useForm } from '@inertiajs/react'
import { FormEvent } from 'react'
import AuthLayout from '~/shadcn/components/layouts/AuthLayout'
import { Button } from '~/shadcn/components/ui/button'
import { Input } from '~/shadcn/components/ui/input'

export default function Home() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    post('/register')
  }
  return (
    <>
      <Head title="Register Page" />
      <AuthLayout>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <h2 className="text-3xl font-bold text-black/65 text-center">Register</h2>
          <Input placeholder="Name" className="bg-white border border-gray-300 w-full" />
          <Input placeholder="Email" className="bg-white border border-gray-300 w-full" />
          <Input placeholder="Phone" className="bg-white border border-gray-300 w-full" />
          <Input placeholder="Password" className="bg-white border border-gray-300 w-full" />
          <Input placeholder="Repeat Password" className="bg-white border border-gray-300 w-full" />
          <Button
            type="submit"
            className="w-full bg-accent rounded-full text-xl py-6 hover:bg-accent/75"
          >
            Register
          </Button>
          <div className="w-full grid grid-cols-2 gap-4 text-lg">
            <Button className="bg-white border border-gray-300 text-accent text-lg font-semibold py-6 px-10 hover:bg-background-light">
              Google
            </Button>
            <Button className="bg-white border border-gray-300 text-accent text-lg font-semibold py-6 px-10 hover:bg-background-light">
              Facebook
            </Button>
          </div>
          <p className="text-sm text-black/65 text-center">
            Already have account? -{' '}
            <Link href="/login" className="text-accent">
              Click here to login
            </Link>
          </p>
        </form>
      </AuthLayout>
    </>
  )
}
