import { BaseSeeder } from '@adonisjs/lucid/seeders'
import CarType from '#models/car_type'
import FuelType from '#models/fuel_type'
import CarBrand from '#models/car_brand'
import CarModel from '#models/car_model'
import Feature from '#models/feature'
import fuelTypes from '#database/data/FuelTypes'
import carTypes from '#database/data/CarTypes'
import carBrands from '#database/data/CarBrands'
import carModels from '#database/data/CarModels'
import features from '#database/data/features'

export default class extends BaseSeeder {
  async run() {
    for (const fuelType of fuelTypes) {
      await FuelType.create({ name: fuelType })
    }

    for (const carType of carTypes) {
      await CarType.create({ name: carType })
    }

    for (const carBrand of carBrands) {
      await CarBrand.create({ id: carBrand.id, name: carBrand.name })
    }

    for (const carModel of carModels) {
      await CarModel.create({ brandId: carModel.brandId, name: carModel.name })
    }

    for (const feature of features) {
      await Feature.create({ name: feature })
    }
  }
}
