import vine from '@vinejs/vine'

export const RegisterSchema = vine.compile(
  vine.object({
    name: vine.string().minLength(3),
    email: vine.string().email().normalizeEmail().isUnique({ table: 'users', column: 'email' }),
    phone: vine.number().isUnique({ table: 'users', column: 'phone' }),
    password: vine.string().minLength(8),
    repeatPassword: vine.string().sameAs('password'),
  })
)

export const LoginSchema = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail(),
    password: vine.string().minLength(8),
  })
)
