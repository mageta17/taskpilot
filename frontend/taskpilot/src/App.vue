<template>
  <div>
    <header>
        <div class="dark:bg-slate-950 bg-slate-700">
            <nav class="container mx-auto flex items-center justify-between p-4">
                <RouterLink to="/" class="text-slate-200">Home</RouterLink>
                <div class="flex space-x-2">
                    <RouterLink to="/login" class="text-slate-200">Login</RouterLink>
                    <RouterLink to="/register" class="text-slate-200">Register</RouterLink>
                </div>
            </nav>
        </div>
    </header>

    <main class="max-w-4xl mx-auto bg-slate-100 dark:bg-slate-900 min-h-screen">
      <div class="mb-6">
          <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>