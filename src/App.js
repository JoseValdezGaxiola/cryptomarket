import { Route, Routes } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Home from "./routes/Home"
import Account from "./routes/Account"
import CoinPage from "./routes/CoinPage"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/account' element={<Account />} />

        <Route path='/coin/:coinId' element={<CoinPage />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
