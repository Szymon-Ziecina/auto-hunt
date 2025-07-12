import User from '#models/user'
import { LoginSchema } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
  async index({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  async handle({ request, response, auth }: HttpContext) {
    const data = await request.validateUsing(LoginSchema)

    const user = await User.verifyCredentials(data.email, data.password)

    await auth.use('web').login(user)

    return response.redirect().toPath('/')
  }
}
