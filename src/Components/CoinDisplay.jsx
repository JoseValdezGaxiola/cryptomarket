import React from "react"
import CoinItem from "./CoinItem"

const DisplayCoin = ({ coins }) => {
  return (
    <>
      {coins.map((coin) => (
        <CoinItem key={coin.id} coin={coin} />
      ))}
    </>
  )
}

export default DisplayCoin
