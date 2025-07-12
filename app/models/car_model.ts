import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import CarBrand from './car_brand.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Offer from './offer.js'

export default class CarModel extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare brandId: number

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => CarBrand)
  declare brand: BelongsTo<typeof CarBrand>

  @hasMany(() => Offer)
  declare offers: HasMany<typeof Offer>
}
