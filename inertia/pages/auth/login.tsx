import { SharedProps } from '@adonisjs/inertia/types'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import { FormEvent } from 'react'
import AuthLayout from '~/shadcn/components/layouts/AuthLayout'
import { Button } from '~/shadcn/components/ui/button'
import { Input } from '~/shadcn/components/ui/input'
import { cn } from '~/shadcn/lib/utils'

export default function Login() {
  const { props } = usePage<SharedProps>()
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    post('/login')
  }
  return (
    <>
      <Head title="Login Page" />
      <AuthLayout>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <h2 className="text-3xl font-bold text-black/65 text-center">Login</h2>
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
            {props.errors?.E_INVALID_CREDENTIALS && (
              <p className="text-sm text-red-500">{props.errors.E_INVALID_CREDENTIALS}</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-accent rounded-full text-xl py-6 hover:bg-accent/75"
            disabled={processing}
          >
            {processing ? 'Logging in...' : 'Login'}
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
            Don't have account? -{' '}
            <Link href="/register" className="text-accent">
              Click here to create one
            </Link>
          </p>
        </form>
      </AuthLayout>
    </>
  )
}
