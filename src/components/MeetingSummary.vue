<script setup>
defineProps({ meeting: Object })
</script>

<template>
  <article class="bg-white rounded-lg border border-stone-200 p-6 space-y-6">
    <header>
      <p class="text-xs uppercase tracking-wide text-stone-400">Ata de reunião</p>
      <h2 class="text-xl font-semibold mt-1">{{ meeting.title }}</h2>
      <p class="text-sm text-stone-500 mt-1">{{ meeting.date }} · Duração: {{ meeting.duration }}</p>
    </header>

    <section>
      <h3 class="font-medium mb-2">Participantes</h3>
      <ul class="text-sm space-y-1">
        <li v-for="p in meeting.attendees" :key="p.name">
          {{ p.name }} <span class="text-stone-500">— {{ p.role }}</span>
        </li>
      </ul>
    </section>

    <section>
      <h3 class="font-medium mb-2">Pauta</h3>
      <ol class="text-sm list-decimal list-inside space-y-1">
        <li v-for="item in meeting.agenda" :key="item">{{ item }}</li>
      </ol>
    </section>

    <section>
      <h3 class="font-medium mb-2">Decisões</h3>
      <ul class="text-sm list-disc list-inside space-y-2">
        <li v-for="d in meeting.decisions" :key="d">{{ d }}</li>
      </ul>
    </section>

    <section>
      <h3 class="font-medium mb-2">Próximos passos</h3>
      <table class="w-full text-sm">
        <thead class="text-left text-stone-500">
          <tr>
            <th class="font-normal pb-1">Responsável</th>
            <th class="font-normal pb-1">Ação</th>
            <th class="font-normal pb-1">Prazo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in meeting.actions" :key="a.task" class="border-t border-stone-100">
            <td class="py-1.5 pr-3 whitespace-nowrap">{{ a.owner }}</td>
            <td class="py-1.5 pr-3">{{ a.task }}</td>
            <td class="py-1.5 whitespace-nowrap">{{ a.deadline }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <p class="text-sm italic text-stone-600 border-t border-stone-100 pt-4">{{ meeting.conclusion }}</p>
  </article>
</template>
