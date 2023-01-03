/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaTwitter, FaFacebook } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className=' bg-primary'>
      <div className='max-w-6xl border border-secondary rounded-2xl shadow-xl  px-2 flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row'>
        <a
          href='#'
          className='text-2xl font-bold  transition-colors duration-300 hover:text-blue-500 '
        >
          CryptoMarket
        </a>
        <p className='text-sm text-secondary '>
          Inspired by CRYPTO.COM, <br />
          powered by COINGECKO API.
        </p>

        <div className='flex -mx-2 '>
          <div className='mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 '>
            <AiOutlineInstagram className='w-10 h-10' />
          </div>
          <div className='mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 '>
            <FaFacebook className='w-10 h-10' />
          </div>
          <div className='mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 '>
            <FaTwitter className='w-10 h-10' />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
