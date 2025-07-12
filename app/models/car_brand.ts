import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import CarModel from './car_model.js'
import Offer from './offer.js'

export default class CarBrand extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => CarModel)
  declare brands: HasMany<typeof CarModel>

  @hasMany(() => Offer)
  declare offers: HasMany<typeof Offer>
}
