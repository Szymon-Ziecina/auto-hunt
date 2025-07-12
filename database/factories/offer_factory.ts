import factory from '@adonisjs/lucid/factories'
import Offer from '#models/offer'
import carBrands from '#database/data/CarBrands'
import carModels from '#database/data/CarModels'
import carTypes from '#database/data/CarTypes'
import fuelTypes from '#database/data/FuelTypes'
import { DateTime } from 'luxon'
import features from '#database/data/features'

const getRandomElement = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)]

export const OfferFactory = factory
  .define(Offer, async ({ faker }) => {
    const brand = getRandomElement(carBrands)
    const models = carModels.map((m, i) => ({ id: i + 1, ...m }))
    const modelsForBrand = models.filter((m) => m.brandId === brand.id)
    const model = getRandomElement(modelsForBrand.length ? modelsForBrand : models)
    const carTypeId = carTypes.indexOf(getRandomElement(carTypes)) + 1
    const fuelTypeId = fuelTypes.indexOf(getRandomElement(fuelTypes)) + 1
    const soldDate = faker.helpers.maybe(() => DateTime.fromJSDate(faker.date.past()), {
      probability: 0.3,
    })
    return {
      userId: 1,
      brandId: brand.id,
      modelId: model.id,
      carTypeId,
      fuelTypeId,
      productionYear: faker.date
        .between({ from: '2000-01-01', to: new Date().toISOString() })
        .getFullYear(),
      price: faker.number.int({ min: 500, max: 100000 }),
      vinNumber: faker.vehicle.vin(),
      mileage: faker.number.int({ min: 0, max: 300000 }),
      description: faker.lorem.sentence(),
      offerAddress: faker.location.streetAddress(),
      soldAt: soldDate,
    }
  })
  .relation('features', ({ faker }: { faker: import('@faker-js/faker').Faker }) => {
    const count = faker.number.int({ min: 1, max: 5 })
    const selectedIds = faker.helpers.arrayElements(
      features.map((_, idx) => idx + 1),
      count
    )
    return selectedIds.map((featureId) => ({ featureId }))
  })
  .relation('images', ({ faker }: { faker: import('@faker-js/faker').Faker }) => {
    const count = faker.number.int({ min: 1, max: 5 })
    return Array.from({ length: count }).map((_, idx) => {
      const seed = faker.string.uuid()
      return {
        sortOrder: idx + 1,
        imageUrl: `https://picsum.photos/seed/${seed}/800/600`,
      }
    })
  })
  .build()
