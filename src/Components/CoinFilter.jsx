import React from "react"

const FilterCoin = ({ value, handleChange }) => {
  return (
    <>
      <form>
        <input
          className='w-full rounded-2xl border border-input bg-primary px-4 py-2 shadow-xl'
          onChange={handleChange}
          type='text'
          value={value}
          placeholder='Search a coin'
        />
      </form>
    </>
  )
}

export default FilterCoin
