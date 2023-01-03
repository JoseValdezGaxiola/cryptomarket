import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='mx-auto flex h-20 max-w-6xl items-center  justify-between rounded-2xl border border-secondary px-2 font-bold shadow-xl'>
      <Link to='/'>
        <h1 className='text-2xl transition-colors duration-300 hover:text-blue-500'>
          CryptoMarket
        </h1>
      </Link>
      <div className='hidden md:block'>
        <ThemeToggle />
      </div>

      <div onClick={handleNav} className='z-10 block cursor-pointer md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Nav*/}
      <div
        className={
          nav
            ? "easy-in duration 300 fixed left-0 top-20 z-10 flex h-[90%] w-full flex-col items-center justify-between bg-primary md:hidden"
            : "easy-in fixed left-[-100%] top-20 flex h-[90%] flex-col items-center justify-between duration-300"
        }
      >
        <ul className='w-full p-4'>
          <li className='border-b py-6'>
            <Link to='/'>Home</Link>
          </li>

          <li className='border-b py-6'>
            <Link to='/'>Account</Link>
          </li>
          <li className='py-6'>
            <ThemeToggle />
          </li>
        </ul>
        <div className='flex w-full flex-col p-4'></div>
      </div>
    </div>
  )
}
export default Navbar
