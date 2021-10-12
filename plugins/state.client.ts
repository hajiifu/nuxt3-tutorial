export default defineNuxtPlugin(() => {
  const state = useState('state', () => ({ count: 0 }))
})
