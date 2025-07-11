import User from '#models/user'
import { RegisterSchema } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  index({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  async store({ request, response, auth }: HttpContext) {
    const { repeatPassword, ...data } = await request.validateUsing(RegisterSchema)

    const user = await User.create(data)

    await auth.use('web').login(user)

    return response.redirect().toPath('/')
  }
}
