import type { HttpContext } from '@adonisjs/core/http'
import { normalize, sep } from 'node:path'
import app from '@adonisjs/core/services/app'
import { createReadStream } from 'node:fs'
import { extname } from 'node:path'
import mime from 'mime-types'

const PATH_TRAVERSAL_REGEX = /(?:^|[\\/])\.\.(?:[\\/]|$)/

export default class FilesController {
  async index({ params, response }: HttpContext) {
    const filePath = normalize(params['*'].join(sep))

    if (PATH_TRAVERSAL_REGEX.test(filePath)) {
      return response.badRequest('Malformed path')
    }

    const abs = app.makePath('app', 'storage', filePath)
    const mimeType = mime.lookup(extname(abs)) || 'application/octet-stream'

    response.type(mimeType)
    return response.stream(createReadStream(abs))
  }
}
