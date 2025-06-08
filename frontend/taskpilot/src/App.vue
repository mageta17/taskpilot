<template>
  <div
    class="flex flex-col min-h-screen font-Roboto bg-taskpilot-primary"
  >
    <navigation />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import navigation from "./components/navigation.vue";
</script>