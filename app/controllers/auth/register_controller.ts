import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  index({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  // async store({ request, response, auth }: HttpContext) {}
}
