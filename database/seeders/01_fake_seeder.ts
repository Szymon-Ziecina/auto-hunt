import { OfferFactory } from '#database/factories/offer_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await OfferFactory.createMany(500)
  }
}
