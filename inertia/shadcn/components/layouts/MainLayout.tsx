import Navbar from '../Navbar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col bg-background-light min-h-screen">
      <Navbar />
      {children}
    </div>
  )
}

export default MainLayout
