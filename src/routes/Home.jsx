import CoinSearch from "../Components/CoinSearch"

import CoinTrending from "../Components/CoinTrending"

const Home = ({ coins, trending }) => {
  return (
    <div>
      <CoinTrending trending={trending} />
      <CoinSearch coins={coins} />
    </div>
  )
}
export default Home
