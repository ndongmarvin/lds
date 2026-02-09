<template>
 <div class="app">
 <NuxtLayout>
    <NuxtPage />

  </NuxtLayout>
 </div>
</template>

<script setup lang="ts">
// Utilisation de l'API de Composition




</script>

<style>
/* Styles globaux - Apple Style + WhatsApp Green */
html, body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #ffffff;
  color: #1d1d1f;
}

.app {
  min-height: 100vh;
  background-color: #ffffff;
}

/* Support du mode sombre */
.dark .app {
  background-color: #000000;
  color: #f5f5f7;
}

/* Utilitaires pour les transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Styles pour les boutons */
button {
  cursor: pointer;
}

/* Styles pour les formulaires */
input, select, textarea {
  outline: none;
}

/* Styles pour les tableaux */
table {
  border-collapse: collapse !important;
  border-spacing: 0;
  width: 100%;
}

h2 {
  font-size: 80px;
  font-weight: 900;
  letter-spacing: -2px;
  margin-bottom: 48px;
  color: #1e3a8a;
  text-align: center;
}
</style> 