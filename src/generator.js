const openers = [
  'Precisamos',
  'Vamos',
  'A ideia aqui é',
  'O foco agora é',
  'Nosso desafio é',
  'A diretoria quer',
  'Proponho',
  'Faz sentido',
  'O próximo passo é',
  'Temos que',
]

const verbs = [
  'alavancar',
  'otimizar',
  'potencializar',
  'ressignificar',
  'destravar',
  'escalar',
  'empoderar',
  'mapear',
  'fomentar',
  'catalisar',
  'endereçar',
  'capilarizar',
  'tangibilizar',
  'operacionalizar',
  'disruptar',
  'alinhar',
  'priorizar',
  'monetizar',
]

const nouns = [
  'a sinergia',
  'o paradigma',
  'a inovação',
  'o ecossistema',
  'a jornada do cliente',
  'o mindset',
  'a cultura de dono',
  'o pipeline',
  'a governança',
  'o roadmap',
  'a proposta de valor',
  'o framework',
  'a entrega de valor',
  'o core business',
  'a transformação digital',
  'o engajamento',
  'a experiência do colaborador',
  'o funil',
  'a escalabilidade',
  'o budget',
  'a stack',
  'o KPI',
]

const adjectives = [
  ['escalável', 'escalável'],
  ['disruptivo', 'disruptiva'],
  ['holístico', 'holística'],
  ['ágil', 'ágil'],
  ['sustentável', 'sustentável'],
  ['estratégico', 'estratégica'],
  ['data-driven', 'data-driven'],
  ['omnichannel', 'omnichannel'],
  ['orgânico', 'orgânica'],
  ['transversal', 'transversal'],
  ['proativo', 'proativa'],
  ['customer-centric', 'customer-centric'],
  ['robusto', 'robusta'],
  ['integrado', 'integrada'],
]

const connectors = ['para', 'a fim de', 'com o objetivo de', 'visando', 'de modo a']

const closers = [
  '',
  ' dentro do nosso ecossistema',
  ' de forma ágil',
  ' no próximo quarter',
  ' end-to-end',
  ' com foco no cliente',
  ' até o EOD',
  ' sem perder o timing',
  ' fora da caixa',
  ' no médio e longo prazo',
]

const pick = arr => arr[Math.floor(Math.random() * arr.length)]
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5)

export function generateSentence() {
  const [a, b, c] = shuffle(nouns)
  const [v1, v2] = shuffle(verbs)
  const [adj1, adj2] = shuffle(adjectives)
  const g = noun => noun.startsWith('a ') ? 1 : 0

  return `${pick(openers)} ${v1} ${a} ${adj1[g(a)]} ${pick(connectors)} ${v2} ${b} d${c} ${adj2[g(c)]}${pick(closers)}.`
}
