import React from "react"
import { HiSun, HiMoon } from "react-icons/hi"
import useDarkMode from "../Hooks/useDarkMode"

const ThemeToggle = () => {
  const [isDark, setIsDark] = useDarkMode()
  return (
    <div className='p-2'>
      {isDark ? (
        <div className='flex items-center cursor-pointer' onClick={() => setIsDark(!isDark)}>
          <HiSun /> Light Mode
        </div>
      ) : (
        <div className='flex items-center cursor-pointer' onClick={() => setIsDark(!isDark)}>
          <HiMoon /> Dark Mode
        </div>
      )}
    </div>
  )
}

export default ThemeToggle
