import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import CarBrand from './car_brand.js'
import CarModel from './car_model.js'
import CarType from './car_type.js'
import FuelType from './fuel_type.js'
import Feature from './feature.js'
import OfferImage from './offer_image.js'

export default class Offer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare brandId: number

  @column()
  declare modelId: number

  @column()
  declare carTypeId: number

  @column()
  declare fuelTypeId: number

  @column()
  declare productionYear: number

  @column()
  declare price: number

  @column()
  declare vinNumber: string

  @column()
  declare mileage: number

  @column()
  declare description: string | null

  @column()
  declare offerAddress: string

  @column.dateTime()
  declare soldAt: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare seller: BelongsTo<typeof User>

  @belongsTo(() => CarBrand)
  declare carBrand: BelongsTo<typeof CarBrand>

  @belongsTo(() => CarModel)
  declare carModel: BelongsTo<typeof CarModel>

  @belongsTo(() => CarType)
  declare carType: BelongsTo<typeof CarType>

  @belongsTo(() => FuelType)
  declare fuelType: BelongsTo<typeof FuelType>

  @manyToMany(() => Feature)
  declare features: ManyToMany<typeof Feature>

  @hasMany(() => OfferImage)
  declare images: HasMany<typeof OfferImage>
}
