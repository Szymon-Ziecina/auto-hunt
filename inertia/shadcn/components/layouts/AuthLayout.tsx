const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center gap-24 bg-background-light min-h-screen">
      <div className="flex flex-col gap-4 justify-center items-center min-w-1/5">
        <img src="/storage/logo.svg" alt="Auto Hunt logo" />
        {children}
      </div>
      <img src="/storage/hero.png" alt="Hero Image" className="max-h-64 max-xl:hidden" />
    </div>
  )
}

export default AuthLayout
