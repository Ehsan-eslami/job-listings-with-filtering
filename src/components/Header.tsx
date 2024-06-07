
export default function Header() {
  return (
    <header>
      <div className="hidden md:block fixed top-0 w-screen">
        <img 
          src="/images/bg-header-desktop.svg"
          alt="Desktop header" 
          className="w-full"
        />
      </div>

      <div className="md:hidden block fixed top-0 w-screen">
        <img 
          src="/images/bg-header-mobile.svg"
          alt="Desktop header" 
          className="w-full"
        />
      </div>
    </header>
  )
}
