export type TeachingBlock = {
  heading: string;
  paragraphs: string[];
  items?: { term: string; text: string }[];
};

export type Teaching = {
  id: string;
  pali: string;
  name: string;
  subtitle: string;
  summary: string;
  blocks: TeachingBlock[];
  note?: string;
};

export const TEACHINGS: Teaching[] = [
  {
    id: "buda",
    pali: "Siddhattha Gotama",
    name: "O Buda",
    subtitle: "Aquele que despertou",
    summary:
      "A palavra Buda não é um nome, mas um título: significa desperto. Antes dele, houve um homem diante das mesmas perguntas que nos alcançam.",
    blocks: [
      {
        heading: "Uma vida que começa protegida",
        paragraphs: [
          "Siddhartha Gautama nasceu príncipe, num pequeno reino ao pé do Himalaia, por volta do século VI antes da era comum. Cresceu cercado de conforto, deliberadamente afastado de tudo o que pudesse perturbá-lo.",
          "A tradição narra que, ao sair do palácio, encontrou aquilo de que o haviam protegido: alguém envelhecido, alguém doente, um corpo sendo levado para a cremação — e, por fim, um asceta em serena busca. As três primeiras cenas lhe mostraram o que a vida reserva a todos; a quarta, que havia quem procurasse uma resposta.",
        ],
      },
      {
        heading: "A busca e o caminho do meio",
        paragraphs: [
          "Deixou o palácio e passou anos em práticas ascéticas severas, ao ponto da quase inanição. Concluiu que a mortificação do corpo não liberta mais do que a indulgência que havia deixado para trás.",
          "Abandonou os dois extremos e formulou o que ficaria conhecido como o caminho do meio. Sentou-se sob uma figueira e ali permaneceu até compreender — não por revelação recebida de fora, mas por observação atenta da própria experiência.",
          "O que ensinou nos quarenta e cinco anos seguintes começa com um diagnóstico honesto do sofrimento e termina com a afirmação de que ele pode cessar.",
        ],
      },
    ],
    note: "As narrativas sobre a vida do Buda vêm de fontes de datas diversas e comportam camadas legendárias. São apresentadas aqui como a tradição as conta.",
  },
  {
    id: "quatro-verdades",
    pali: "Cattāri Ariyasaccāni",
    name: "As Quatro Nobres Verdades",
    subtitle: "Um diagnóstico e uma prescrição",
    summary:
      "O primeiro ensinamento após o despertar, e a base de tudo o que veio depois. A estrutura é a de um médico diante de um doente: constatar, encontrar a causa, afirmar que há cura, indicar o tratamento.",
    blocks: [
      {
        heading: "Primeira · a verdade de dukkha",
        paragraphs: [
          "A vida, como habitualmente a vivemos, é atravessada por dukkha. A palavra costuma ser traduzida por sofrimento, mas abrange mais: insatisfação, desconforto, a inquietação de fundo de quem depende de coisas que não permanecem.",
        ],
        items: [
          { term: "Dukkha-dukkha", text: "a dor evidente — a doença, o envelhecimento, a morte, a perda." },
          { term: "Viparinama-dukkha", text: "o sofrimento que nasce da mudança: mesmo o que é bom termina." },
          { term: "Sankhara-dukkha", text: "a insatisfação sutil que acompanha toda existência condicionada." },
        ],
      },
      {
        heading: "Segunda · a origem",
        paragraphs: [
          "A causa é taṇhā — a sede, a ânsia, o apego. O desejo insaciável de prazer, de permanecer, e às vezes de deixar de ser. É essa sede que mantém girando o ciclo.",
          "Note-se o que a afirmação não diz: não é o desejo em si que é condenado, nem o prazer que é proibido. É a ânsia que não se sacia, aquela que precisa que a realidade seja diferente do que é.",
        ],
      },
      {
        heading: "Terceira · a cessação",
        paragraphs: [
          "Aqui está a afirmação mais decisiva: dukkha pode cessar. Extinta a ânsia, alcança-se o nirvana — paz, libertação, fim do sofrimento.",
          "Sem esta terceira verdade, o budismo seria apenas um pessimismo bem articulado. Com ela, torna-se um caminho.",
        ],
      },
      {
        heading: "Quarta · o caminho",
        paragraphs: [
          "E há um método: o Nobre Caminho Óctuplo, que evita tanto a mortificação quanto a indulgência. É o conteúdo prático de tudo o mais.",
        ],
      },
    ],
  },
  {
    id: "tres-marcas",
    pali: "Tilakkhaṇa",
    name: "As Três Marcas da Existência",
    subtitle: "Impermanência, insatisfação, não-eu",
    summary:
      "Três características que a observação atenta encontra em tudo o que é condicionado — inclusive em nós.",
    blocks: [
      {
        heading: "Anicca · impermanência",
        paragraphs: [
          "Nada permanece. O corpo, os pensamentos, as emoções, o que possuímos e o mundo em volta surgem e se desfazem continuamente.",
          "Apegar-se ao que por natureza não dura é uma das raízes do sofrimento. Mas há também o outro lado: se cada momento é único e não se repete, cada momento passa a ter peso. A impermanência não convida ao desespero — convida à atenção.",
        ],
      },
      {
        heading: "Anatta · não-eu",
        paragraphs: [
          "É o ensinamento mais radical, e o mais facilmente mal compreendido. Se tudo muda continuamente, não há como haver dentro de nós uma entidade fixa, imutável e independente.",
          "O que chamamos de eu é, na leitura budista, a combinação sempre em movimento de cinco agregados:",
        ],
        items: [
          { term: "Forma", text: "o corpo físico." },
          { term: "Sensação", text: "o que se experimenta como agradável, desagradável ou neutro." },
          { term: "Percepção", text: "o reconhecer e nomear." },
          { term: "Formações mentais", text: "pensamentos, intenções, disposições." },
          { term: "Consciência", text: "o saber-se ciente." },
        ],
      },
      {
        heading: "O que anatta não afirma",
        paragraphs: [
          "Anatta não diz que você não existe, nem que sua vida não importa, nem que suas escolhas são indiferentes. Diz que aquilo que se toma por um núcleo sólido e separado é mais fluido do que parece.",
          "A consequência prática é ética: se a fronteira entre eu e outro é menos rígida do que supomos, a compaixão deixa de ser sacrifício e passa a ser reconhecimento.",
        ],
      },
    ],
  },
  {
    id: "caminho-octuplo",
    pali: "Ariya Aṭṭhaṅgika Magga",
    name: "O Nobre Caminho Óctuplo",
    subtitle: "Oito aspectos, cultivados juntos",
    summary:
      "Não são oito degraus a subir em ordem, mas oito dimensões da vida a desenvolver ao mesmo tempo. A tradição as agrupa em três conjuntos.",
    blocks: [
      {
        heading: "Prajñā · sabedoria",
        paragraphs: ["A compreensão que orienta todo o resto."],
        items: [
          { term: "Compreensão correta", text: "entender as Quatro Nobres Verdades e a natureza do que é condicionado." },
          { term: "Pensamento correto", text: "cultivar disposições de boa vontade e não violência, deixando cobiça e crueldade." },
        ],
      },
      {
        heading: "Śīla · conduta",
        paragraphs: ["A vida ética como base — não como exigência externa, mas como condição para a mente se aquietar."],
        items: [
          { term: "Fala correta", text: "abster-se da mentira, da calúnia, da aspereza e da conversa fútil que fere." },
          { term: "Ação correta", text: "não matar, não tomar o que não foi dado, não usar da sexualidade para causar dano." },
          { term: "Modo de vida correto", text: "sustentar-se por meios que não prejudiquem a si nem a outros." },
        ],
      },
      {
        heading: "Samādhi · disciplina mental",
        paragraphs: ["O trabalho direto com a mente."],
        items: [
          { term: "Esforço correto", text: "impedir e abandonar estados prejudiciais; cultivar e sustentar os benéficos." },
          { term: "Atenção plena correta", text: "consciência momento a momento do corpo, das sensações e da mente, sem julgamento." },
          { term: "Concentração correta", text: "a capacidade de recolher a mente, que conduz aos estados meditativos profundos." },
        ],
      },
    ],
  },
  {
    id: "karma-nirvana",
    pali: "Kamma · Saṃsāra · Nibbāna",
    name: "Karma, Samsara e Nirvana",
    subtitle: "Ação, ciclo e libertação",
    summary:
      "Três noções ligadas entre si, que formam o horizonte moral e existencial do caminho.",
    blocks: [
      {
        heading: "Karma · ação intencional",
        paragraphs: [
          "Karma significa, literalmente, ação — e no budismo refere-se especificamente à ação intencional. É a intenção que semeia.",
          "Não se trata de recompensa distribuída por alguém, nem de destino escrito de antemão. É antes a constatação de que aquilo que fazemos, dizemos e cultivamos molda quem nos tornamos. É a afirmação mais forte de responsabilidade que a tradição faz.",
        ],
      },
      {
        heading: "Samsara · o ciclo",
        paragraphs: [
          "O fluxo da consciência, movido pela ignorância e pelo apego, não se encerra com a morte do corpo: continua em novo nascimento, num ciclo descrito como insatisfatório por natureza.",
          "Há quem leia samsara literalmente, como sucessão de vidas; há quem o leia como descrição do que se repete dentro de uma única existência — os mesmos padrões, os mesmos apegos, girando. As escolas divergem, e o projeto não arbitra.",
        ],
      },
      {
        heading: "Nirvana · o extinguir-se",
        paragraphs: [
          "A palavra significa apagar, extinguir — como se apaga uma chama. O que se extingue são as três fogueiras: o desejo ávido, a aversão e a ignorância.",
          "Nirvana não é lugar nem recompensa póstuma. É a cessação do que produz sofrimento, e a tradição é cuidadosa em não descrevê-lo demais: aquilo que está além das categorias com que pensamos não se deixa capturar por elas.",
        ],
      },
    ],
  },
  {
    id: "correntes",
    pali: "Yāna",
    name: "As três grandes correntes",
    subtitle: "Theravada, Mahayana, Vajrayana",
    summary:
      "Ao longo de vinte e cinco séculos o budismo se diversificou. As três correntes principais são chamadas de veículos — modos de percorrer o mesmo caminho.",
    blocks: [
      {
        heading: "Theravada · a doutrina dos anciãos",
        paragraphs: [
          "A escola mais antiga em continuidade, predominante no Sudeste Asiático — Sri Lanka, Tailândia, Mianmar, Camboja, Laos. Apoia-se no Cânone Páli.",
          "Seu ideal é o arahant: aquele que alcança a libertação pelo próprio esforço, seguindo o que o Buda ensinou.",
        ],
      },
      {
        heading: "Mahayana · o grande veículo",
        paragraphs: [
          "Predominante no Leste Asiático — China, Japão, Coreia, Vietnã. Além do cânone antigo, reverencia sutras próprios.",
          "Seu ideal é o bodhisattva: aquele que, por compaixão, adia a própria libertação para acompanhar os demais seres. Dá centralidade à compaixão (karuṇā) e à vacuidade (śūnyatā).",
          "O zen, tão conhecido no Ocidente, é um de seus ramos.",
        ],
      },
      {
        heading: "Vajrayana · o veículo do diamante",
        paragraphs: [
          "Desenvolvimento do Mahayana, predominante no Tibete, no Butão, na Mongólia e regiões vizinhas. Emprega recursos tântricos — mantras, mandalas, visualizações — como métodos de transformação.",
          "O budismo tibetano é sua expressão mais conhecida.",
        ],
      },
    ],
    note: "As correntes se reconhecem mutuamente como budistas e divergem em textos, métodos e ênfases. Esta página as descreve como se apresentam, sem tratar nenhuma como norma das demais.",
  },
  {
    id: "figuras",
    pali: "Ācariya",
    name: "Figuras que formaram o caminho",
    subtitle: "De Nagarjuna ao Dalai Lama",
    summary:
      "Uma seleção mínima entre incontáveis mestres, escolhida pela influência e pela variedade de percursos.",
    blocks: [
      {
        heading: "Clássicos",
        paragraphs: [],
        items: [
          {
            term: "Nāgārjuna (c. 150–250)",
            text: "fundador da escola Madhyamaka, o caminho do meio. Sua análise da vacuidade — segundo a qual nada possui existência independente, nem mesmo a própria vacuidade — marcou todo o pensamento Mahayana posterior.",
          },
          {
            term: "Bodhidharma (século V)",
            text: "monge indiano a quem se atribui a transmissão do Chan (que no Japão se chamaria Zen) para a China. Deu primazia à meditação e à experiência direta sobre a erudição.",
          },
          {
            term: "Padmasambhava (século VIII)",
            text: "figura central no estabelecimento do budismo no Tibete, associado à fundação do primeiro mosteiro tibetano.",
          },
        ],
      },
      {
        heading: "Contemporâneos",
        paragraphs: [],
        items: [
          {
            term: "Thich Nhat Hanh (1926–2022)",
            text: "mestre zen vietnamita, poeta e ativista pela paz. Teve papel decisivo na difusão da atenção plena no Ocidente e formulou a noção de interser: nada existe separadamente.",
          },
          {
            term: "14º Dalai Lama (1935–)",
            text: "líder espiritual do budismo tibetano e Prêmio Nobel da Paz de 1989. Dedica-se à compaixão, à ética secular e ao diálogo entre religiões e com a ciência.",
          },
        ],
      },
    ],
  },
  {
    id: "textos",
    pali: "Tipiṭaka",
    name: "Os textos",
    subtitle: "Os três cestos e os sutras",
    summary:
      "O que o budismo preservou por escrito — e o que preservou primeiro pela memória.",
    blocks: [
      {
        heading: "Tipiṭaka · os três cestos",
        paragraphs: [
          "O cânone mais antigo preservado, escrito em páli. O nome vem da forma de guardar os manuscritos em cestos.",
        ],
        items: [
          { term: "Vinaya Piṭaka", text: "as regras da vida monástica e as circunstâncias que as originaram." },
          { term: "Sutta Piṭaka", text: "os discursos atribuídos ao Buda e a seus discípulos diretos." },
          { term: "Abhidhamma Piṭaka", text: "a sistematização filosófica e psicológica dos ensinamentos." },
        ],
      },
      {
        heading: "Os sutras Mahayana",
        paragraphs: [
          "A partir de certo momento surgiram textos reverenciados pela corrente Mahayana e não incluídos no cânone páli — entre eles o Sutra do Lótus, os sutras da Perfeição da Sabedoria e o Sutra do Coração, este último brevíssimo e dos mais recitados no mundo.",
          "Antes de qualquer registro escrito, porém, os ensinamentos foram transmitidos oralmente por gerações, em fórmulas feitas para serem memorizadas e recitadas em conjunto.",
        ],
      },
    ],
  },
];
