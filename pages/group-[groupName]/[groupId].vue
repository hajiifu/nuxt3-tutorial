<script setup>
import { isReactive } from 'vue'

const route = useRoute()
console.log('is reactive route:', isReactive(route))
const { params } = route
console.log(isReactive(params))
</script>

<template>
  <h1>動的ルーティングのファイル名の規約が変わった。</h1>
  <ul>
    <li>params.groupName: {{ params.groupName }}</li>
    <li>params.groupId: {{ params.groupId }}</li>
  </ul>
</template>
