import { Route, Routes } from "react-router-dom"
import useData from "./Hooks/useData"
import Navbar from "./Components/Navbar"
import Home from "./routes/Home"
import Account from "./routes/Account"
import CoinPage from "./routes/CoinPage"
import Footer from "./Components/Footer"

function App() {
  const coins = useData(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
  )
  const trending = useData("https://api.coingecko.com/api/v3/search/trending")

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home coins={coins} trending={trending} />} />

        <Route path='/account' element={<Account />} />

        <Route path='/coin/:coinId' element={<CoinPage />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
