import { Head, Link, useForm } from '@inertiajs/react'
import { FormEvent } from 'react'
import AuthLayout from '~/shadcn/components/layouts/AuthLayout'
import { Button } from '~/shadcn/components/ui/button'
import { Input } from '~/shadcn/components/ui/input'
import { cn } from '~/shadcn/lib/utils'

export default function Home() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
  })
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    post('/register')
  }
  return (
    <>
      {/* todo: add display error messages */}
      <Head title="Register Page" />
      <AuthLayout>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <h2 className="text-3xl font-bold text-black/65 text-center">Register</h2>
          <div className="w-full space-y-2">
            <Input
              value={data.name}
              placeholder="Name"
              onChange={(e) => setData('name', e.target.value)}
              className={cn(
                'bg-white border border-gray-300 w-full',
                errors.name && 'border-red-500'
              )}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>
          <div className="w-full space-y-2">
            <Input
              type="email"
              value={data.email}
              placeholder="Email"
              onChange={(e) => setData('email', e.target.value)}
              className={cn(
                'bg-white border border-gray-300 w-full',
                errors.email && 'border-red-500'
              )}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>
          <div className="w-full space-y-2">
            <Input
              value={data.phone}
              type="number"
              placeholder="Phone"
              onChange={(e) => setData('phone', e.target.value)}
              className={cn(
                'bg-white border border-gray-300 w-full',
                errors.phone && 'border-red-500'
              )}
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>
          <div className="w-full space-y-2">
            <Input
              type="password"
              value={data.password}
              placeholder="Password"
              onChange={(e) => setData('password', e.target.value)}
              className={cn(
                'bg-white border border-gray-300 w-full',
                errors.password && 'border-red-500'
              )}
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>
          <div className="w-full space-y-2">
            <Input
              type="password"
              value={data.repeatPassword}
              placeholder="Repeat Password"
              onChange={(e) => setData('repeatPassword', e.target.value)}
              className={cn(
                'bg-white border border-gray-300 w-full',
                errors.repeatPassword && 'border-red-500'
              )}
            />
            {errors.repeatPassword && (
              <p className="text-sm text-red-500">{errors.repeatPassword} </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-accent rounded-full text-xl py-6 hover:bg-accent/75"
            disabled={processing}
          >
            Register
          </Button>
          {/* todo: add social auth */}
          <div className="w-full grid grid-cols-2 gap-4 text-lg">
            <Button
              className="bg-white border border-gray-300 text-accent text-lg font-semibold py-6 px-10 hover:bg-background-light"
              disabled={processing}
            >
              Google
            </Button>
            <Button
              className="bg-white border border-gray-300 text-accent text-lg font-semibold py-6 px-10 hover:bg-background-light"
              disabled={processing}
            >
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
