import useSwr from "swr"

// const baseUrl = "https://api.coingecko.com/api/v3"

export const useRequest = (path) => {
  if (!path) {
    throw new Error("Path is required")
  }

  const url = path
  const { data, error } = useSwr(url)

  return { data, error }
}
