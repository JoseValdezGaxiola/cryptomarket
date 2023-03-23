import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/autoplay"
import Spinner from "./Spinner"
import { useRequest } from "../Hooks/useRequest"

const TrendingCoin = () => {
  const { data, error } = useRequest("https://api.coingecko.com/api/v3/search/trending")
  if (error) return <div>failed to load</div>
  if (!data) return <Spinner />
  console.log(data)
  return (
    <>
      <h1 className='mx-auto mt-12 max-w-6xl text-2xl font-bold'>Trending Coins</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          // when window width is >= 640px

          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className='my-6 max-w-6xl '
      >
        {data.coins?.map((coin, i) => (
          <SwiperSlide key={i}>
            <div className='mx-auto flex w-full justify-between rounded-2xl border  border-secondary bg-primary p-4 px-2 shadow-xl duration-300 ease-in-out hover:scale-105'>
              <div className='flex w-full items-center justify-between'>
                <div className='flex'>
                  <img className='mr-4 rounded-full' src={coin.item.small} alt='/' />
                  <div className=''>
                    <p>{coin.item.name}</p>
                    <p>{coin.item.symbol}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <img
                    className='m-2 w-4'
                    src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                    alt='/'
                  />
                  <p>{coin.item.price_btc?.toFixed(6)}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default TrendingCoin
