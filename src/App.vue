<script setup>
import { ref } from 'vue'
import { generateSentence, generateMeeting } from './generator'
import MeetingSummary from './components/MeetingSummary.vue'

const levels = ['Estagiário', 'Gerente', 'Diretor', 'CEO']

const mode = ref('sentence')
const level = ref(2)
const sentence = ref(generateSentence(level.value))
const meeting = ref(generateMeeting(level.value))
const copied = ref(false)

function generate() {
  if (mode.value === 'sentence') sentence.value = generateSentence(level.value)
  else meeting.value = generateMeeting(level.value)
}

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

      <div class="mt-8 flex gap-4 border-b border-stone-300">
        <button
          v-for="[key, label] in [['sentence', 'Frase'], ['meeting', 'Ata de reunião']]"
          :key="key"
          class="pb-2 -mb-px border-b-2"
          :class="mode === key ? 'border-stone-800 font-medium' : 'border-transparent text-stone-500 hover:text-stone-800'"
          @click="mode = key"
        >
          {{ label }}
        </button>
      </div>

      <div class="mt-6">
        <span class="text-sm text-stone-500">Nível de corporativês</span>
        <div class="mt-2 grid grid-cols-4 gap-1 bg-stone-200 p-1 rounded-md">
          <button
            v-for="(label, i) in levels"
            :key="label"
            class="py-1.5 rounded text-sm"
            :class="level === i + 1 ? 'bg-white shadow-sm font-medium' : 'text-stone-600 hover:text-stone-900'"
            @click="level = i + 1; generate()"
          >
            {{ label }}
          </button>
        </div>
      </div>

      <div v-if="mode === 'sentence'" class="mt-4 bg-white rounded-lg border border-stone-200 p-6">
        <p class="text-xl leading-relaxed">“{{ sentence }}”</p>
      </div>
      <MeetingSummary v-else :meeting="meeting" class="mt-4" />

      <div class="mt-4 flex gap-2">
        <button
          class="px-4 py-2 rounded-md bg-stone-800 text-white hover:bg-stone-700"
          @click="generate"
        >
          {{ mode === 'sentence' ? 'Gerar outra' : 'Gerar outra ata' }}
        </button>
        <button
          v-if="mode === 'sentence'"
          class="px-4 py-2 rounded-md border border-stone-300 hover:bg-stone-200"
          @click="copy"
        >
          {{ copied ? 'Copiado!' : 'Copiar' }}
        </button>
      </div>
    </div>
  </main>
</template>
