import { Head } from '@inertiajs/react'
import HeroSection from '~/shadcn/components/HeroSection'
import MainLayout from '~/shadcn/components/layouts/MainLayout'

export default function Home() {
  return (
    <>
      <Head title="Home Page" />
      <MainLayout>
        <HeroSection />
      </MainLayout>
    </>
  )
}
