<script setup>
import { ref } from 'vue'
import { generateSentence } from './generator'

const sentence = ref(generateSentence())
const copied = ref(false)

async function copy() {
  await navigator.clipboard.writeText(sentence.value)
  copied.value = true
  setTimeout(() => { copied.value = false }, 1500)
}
</script>

<template>
  <main class="min-h-screen bg-stone-100 text-stone-800 px-4 py-10">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-2xl font-semibold">Gerador de Lero-Lero Corporativo</h1>
      <p class="text-stone-500 mt-1">Frases prontas pra você parecer importante na próxima daily.</p>

      <div class="mt-8 bg-white rounded-lg border border-stone-200 p-6">
        <p class="text-xl leading-relaxed">“{{ sentence }}”</p>
      </div>

      <div class="mt-4 flex gap-2">
        <button
          class="px-4 py-2 rounded-md bg-stone-800 text-white hover:bg-stone-700"
          @click="sentence = generateSentence()"
        >
          Gerar outra
        </button>
        <button
          class="px-4 py-2 rounded-md border border-stone-300 hover:bg-stone-200"
          @click="copy"
        >
          {{ copied ? 'Copiado!' : 'Copiar' }}
        </button>
      </div>
    </div>
  </main>
</template>
