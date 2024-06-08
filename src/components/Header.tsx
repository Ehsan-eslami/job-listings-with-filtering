
export default function Header() {
  return (
    <div className="z-0">
      <div className="hidden md:block absolute inset-0 w-full h-full object-cover ">
        <img 
          src="/images/bg-header-desktop.svg"
          alt="Desktop header" 
          className="w-full"
        />
      </div>

      <div className="md:hidden block absolute inset-0 w-full h-full object-cover ">
        <img 
          src="/images/bg-header-mobile.svg"
          alt="Desktop header" 
          className="w-full"
        />
      </div>
    </div>
  )
}
