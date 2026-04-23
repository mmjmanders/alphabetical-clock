import { toWords } from 'to-words'
import { readonly } from 'vue'

export const useWords = () => {
  const minutesAndSecondsSorted: readonly string[] = readonly(
    [...Array(60).keys()].map((i) => toWords(i)).sort(),
  )
  const hours: readonly string[] = readonly([...Array(12).keys()].map((i) => toWords(i + 1)).sort())
  return {
    hours,
    minutes: minutesAndSecondsSorted,
    seconds: minutesAndSecondsSorted,
  }
}
