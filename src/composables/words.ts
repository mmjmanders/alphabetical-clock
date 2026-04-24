import { toWords } from 'to-words/en-US'
import { readonly } from 'vue'

export const useWords = () => {
  const minutesAndSeconds = readonly([...Array(60).keys()].map((i) => toWords(i)).sort())
  const hours = readonly([...Array(12).keys()].map((i) => toWords(i + 1)).sort())
  return {
    hours,
    minutes: minutesAndSeconds,
    seconds: minutesAndSeconds,
  }
}
