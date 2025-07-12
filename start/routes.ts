/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import LogoutController from '#controllers/auth/logout_controller'
const LoginController = () => import('#controllers/auth/login_controller')
const FilesController = () => import('#controllers/files_controller')
const HomeController = () => import('#controllers/home_controller')
const RegisterController = () => import('#controllers/auth/register_controller')

router.get('/', [HomeController, 'index'])

router.get('/storage/*', [FilesController, 'index'])

router
  .group(() => {
    router.get('/register', [RegisterController, 'index'])
    router.post('/register', [RegisterController, 'store'])
    router.get('/login', [LoginController, 'index'])
    router.post('/login', [LoginController, 'handle'])
  })
  .use(middleware.guest())

router.post('/logout', [LogoutController, 'handle']).use(middleware.auth())
