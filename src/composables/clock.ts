import { ref, onMounted, onUnmounted } from 'vue'

export const useClock = () => {
  let interval: number | undefined
  const time = ref<Date>(new Date())

  onMounted(() => {
    interval = setInterval(() => {
      time.value = new Date()
    }, 1000)
  })

  onUnmounted(() => {
    clearInterval(interval)
  })

  return { time }
}
