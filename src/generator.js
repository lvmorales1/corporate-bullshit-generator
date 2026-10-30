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

const gerunds = ['garantindo', 'maximizando', 'blindando', 'acelerando', 'sustentando', 'democratizando', 'gamificando']

const prefixes = [
  'Olhando o big picture,',
  'Num cenário VUCA,',
  'Sendo bem transparente com vocês,',
  'Trazendo pra mesa um insight,',
  'Puxando um pouco o helicóptero,',
  'Sem querer ser o advogado do diabo,',
  'Pensando como dono,',
]

const pick = arr => arr[Math.floor(Math.random() * arr.length)]
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5)

export function generateSentence(level = 2) {
  const [a, b, c, d] = shuffle(nouns)
  const [v1, v2] = shuffle(verbs)
  const [adj1, adj2, adj3] = shuffle(adjectives)
  const g = noun => noun.startsWith('a ') ? 1 : 0

  let text = `${pick(openers)} ${v1} ${a} ${adj1[g(a)]}`
  if (level >= 2) text += ` ${pick(connectors)} ${v2} ${b} d${c} ${adj2[g(c)]}`
  if (level >= 3) text += `, ${pick(gerunds)} ${d} ${adj3[g(d)]}`
  if (level >= 4) text = `${pick(prefixes)} ${text[0].toLowerCase()}${text.slice(1)}`

  return text + pick(closers) + '.'
}
