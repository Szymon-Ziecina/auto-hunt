import { Link } from '@inertiajs/react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <div className="bg-white w-full min-h-[500px]">
      <div className="container mx-auto p-10 md:p-20 xl:px-36 flex max-xl:flex-col justify-center items-center gap-8 py-40">
        <img src="/storage/hero.png" alt="Hero Image" className="max-h-96 min-xl:hidden mb-10" />
        <div className="text-black/65 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Buy <span className="text-accent">The Best Vehicles</span> in your region
          </h1>
          <p className="text-base md:text-2xl font-semibold mt-6">
            Use powerful search tool to find your desired cars based on multiple search criteria:
            Make, Model, Year, Price Range, Car Type, etc...
          </p>
          <Link href="#">
            <Button className="bg-accent text-xl md:text-2xl font-bold px-8 md:px-10 py-6 md:py-8">
              Find the car
            </Button>
          </Link>
        </div>
        <img src="/storage/hero.png" alt="Hero Image" className="max-h-96 max-xl:hidden" />
      </div>
    </div>
  )
}

export default HeroSection
