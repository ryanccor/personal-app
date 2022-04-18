

export const useFetch = async (url: string, revalidateOnFocus: boolean = false) => {
  const response = await fetch(url)
  const data = await response.json()

  return { data }
}