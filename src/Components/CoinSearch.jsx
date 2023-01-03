import { useState } from "react"

import CoinDisplay from "./CoinDisplay"
import CoinFilter from "./CoinFilter"
const CoinSearch = ({ coins }) => {
  const [searchCoin, setSearchCoin] = useState("")
  const coinsToShow =
    searchCoin.length === 0
      ? coins
      : coins.filter((value) => value.name.toLowerCase().includes(searchCoin.toLowerCase()))

  return (
    <div className='mx-auto my-4 max-w-6xl rounded-2xl border  border-secondary px-2  shadow-xl'>
      <div className='md:text-rigt flex flex-col justify-between pt-4 pb-6 text-center md:flex-row'>
        <h1 className='my-2 text-2xl font-bold'>Search Crypto</h1>
        <CoinFilter value={searchCoin} handleChange={({ target }) => setSearchCoin(target.value)} />
      </div>

      <table className='w-full border-collapse text-center'>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='text-left'>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24h volume</th>
            <th className='hidden sm:table-cell'>Mkt</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          <CoinDisplay coins={coinsToShow} />
        </tbody>
      </table>
    </div>
  )
}
export default CoinSearch
