<script setup>
const state = useState('state')
const addState = () => {
  state.value.count++
}
</script>
<template>
  <NuxtLayout name="custom">
    <div>Custom Pages Slot</div>
    <div>state: {{ state }}</div>
    <button @click="addState">add state.count</button>
    <NuxtLink to="/"> top page </NuxtLink>
  </NuxtLayout>
</template>
<script>
export default {
  // NOTE: これがないと、DefaultLayoutの入れ子になる👀
  layout: false,
}
</script>
