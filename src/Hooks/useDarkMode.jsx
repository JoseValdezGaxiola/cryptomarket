import { useEffect } from "react"
import usePreferTheme from "./usePreferTheme"
import useLocalStorage from "./useLocalStorage"
const useDarkMode = () => {
  const prefersDarkMode = usePreferTheme()
  const [isEnabled, setIsEnabled] = useLocalStorage("dark-mode", undefined)

  const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled

  useEffect(() => {
    if (window === undefined) return
    const root = window.document.documentElement
    root.classList.remove(enabled ? "light" : "dark")
    root.classList.add(enabled ? "dark" : "light")
  }, [enabled])

  return [enabled, setIsEnabled]
}
export default useDarkMode
