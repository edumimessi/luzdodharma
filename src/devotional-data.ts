export type MonthTheme = {
  name: string;
  pali: string;
  subtitle: string;
  anchor: string;
  reflection: string;
  practice: string;
  aspiration: string;
};

export type DailyLens = {
  title: string;
  focus: string;
  practice: string;
  question: string;
};

export const MONTH_NAMES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const MONTHS: MonthTheme[] = [
  {
    name: "Atenção plena",
    pali: "Sati",
    subtitle: "Habitar o único instante em que a vida pode ser vivida",
    anchor:
      "O passado permanece como memória; o futuro, como possibilidade. A resposta à vida acontece agora.",
    reflection:
      "A atenção plena não exige que a mente fique vazia. Ela nos ensina a reconhecer pensamentos, emoções e sensações sem entregar a eles toda a nossa identidade. Nesse espaço de consciência, o presente deixa de ser intervalo e se torna campo de liberdade e sentido.",
    practice:
      "Pare por três respirações completas. Reconheça o que está acontecendo dentro e fora de você antes de escolher o próximo gesto.",
    aspiration:
      "Que eu esteja verdadeiramente presente e responda a este momento com clareza.",
  },
  {
    name: "Impermanência",
    pali: "Anicca",
    subtitle: "Receber a mudança como convite à presença e à responsabilidade",
    anchor:
      "Tudo o que surge se transforma. Reconhecer o fluxo não diminui a vida; torna cada encontro precioso.",
    reflection:
      "A impermanência mostra que nenhuma condição resume para sempre quem somos. A transitoriedade pode despertar medo, mas também liberta: a dor não é eterna, o êxito não é posse e cada oportunidade pede uma resposta enquanto está presente. A finitude, em vez de esvaziar o sentido, torna nossas escolhas mais responsáveis.",
    practice:
      "Observe algo que mudou em sua vida. Agradeça o que foi possível e pergunte que atitude o momento atual solicita.",
    aspiration:
      "Que eu saiba acolher as mudanças sem perder a direção do que possui valor.",
  },
  {
    name: "Compreender o sofrimento",
    pali: "Dukkha",
    subtitle: "Olhar a dor com coragem, lucidez e compaixão",
    anchor:
      "Reconhecer o sofrimento não é render-se a ele; é interromper a fuga e iniciar um caminho de transformação.",
    reflection:
      "O caminho budista começa pela honestidade diante de dukkha e pela capacidade de discernir o sofrimento que pode ser aliviado daquele que, por ora, precisa ser atravessado. O primeiro pede ação; o inevitável pede uma atitude digna. A dor não é glorificada: ela é acolhida com lucidez para que uma resposta mais livre se torne possível.",
    practice:
      "Nomeie uma dificuldade atual e separe, com serenidade, o que pode ser transformado daquilo que precisa ser atravessado.",
    aspiration:
      "Que eu não negue a dor nem me reduza a ela; que eu encontre a resposta possível.",
  },
  {
    name: "Desapego e liberdade",
    pali: "Nekkhamma",
    subtitle: "Soltar o que aprisiona para cuidar do que realmente importa",
    anchor:
      "Desapegar não é deixar de amar. É libertar o amor da necessidade de possuir, controlar ou garantir.",
    reflection:
      "O apego rígido exige que pessoas, resultados e identidades permaneçam sob nosso controle. Quando a realidade não obedece, nasce a resistência. Soltar não significa indiferença, mas uma relação mais livre com a experiência: podemos cuidar profundamente sem transformar o cuidado em posse e agir com empenho sem fazer do resultado nossa única medida de valor.",
    practice:
      "Perceba onde a necessidade de controle está consumindo sua energia. Afrouxe uma exigência e preserve apenas a ação que depende de você.",
    aspiration:
      "Que eu me empenhe com inteireza e saiba soltar aquilo que não me pertence controlar.",
  },
  {
    name: "Compaixão",
    pali: "Karuna",
    subtitle: "Responder ao sofrimento sem perder a humanidade compartilhada",
    anchor:
      "A compaixão vê a ferida sem transformar a pessoa em ferida; aproxima-se para aliviar, não para julgar.",
    reflection:
      "Karuna é a disposição de não permanecer indiferente diante do sofrimento. Ela se encontra com a autotranscendência quando deixamos de girar apenas em torno de nós mesmos e nos dirigimos a alguém que necessita de presença. A compaixão madura também conhece limites: ajuda sem dominar, acolhe sem apagar a responsabilidade e inclui a própria fragilidade.",
    practice:
      "Reconheça uma pessoa — inclusive você — que esteja sofrendo. Ofereça um gesto concreto de cuidado compatível com seus limites.",
    aspiration:
      "Que eu reconheça o sofrimento com ternura e transforme minha sensibilidade em cuidado.",
  },
  {
    name: "Amor benevolente",
    pali: "Metta",
    subtitle: "Cultivar uma intenção de bem que não depende de posse",
    anchor:
      "Que todos os seres encontrem segurança, dignidade e paz; que minhas ações não aumentem o sofrimento do mundo.",
    reflection:
      "Metta é uma benevolência que começa perto e gradualmente amplia suas fronteiras. Não exige afeição espontânea por todos, mas educa a intenção para que nossas escolhas não sejam governadas pelo ódio. Na linguagem do sentido, amar é perceber a singularidade do outro e responder à vida com uma presença que deseja o bem sem exigir recompensa.",
    practice:
      "Em silêncio, deseje bem a si mesmo, a alguém querido, a uma pessoa neutra e, se for possível, a alguém com quem exista dificuldade.",
    aspiration:
      "Que meu coração se torne firme no bem e amplo o bastante para não excluir.",
  },
  {
    name: "Não-eu e autodistanciamento",
    pali: "Anatta",
    subtitle: "Não se confundir inteiramente com pensamentos, emoções ou papéis",
    anchor:
      "Eu experimento pensamentos e emoções, mas nenhum estado passageiro esgota quem posso me tornar.",
    reflection:
      "Anatta questiona a ideia de um eu fixo e independente. Ao observar as próprias condições sem se confundir completamente com elas, a pessoa descobre uma margem de liberdade interior. Essa compreensão não elimina a singularidade: reduz a identificação rígida que transforma um pensamento, diagnóstico, erro ou papel em sentença definitiva.",
    practice:
      "Troque mentalmente “eu sou” por “eu percebo em mim”. Observe como essa pequena distância abre uma possibilidade de escolha.",
    aspiration:
      "Que eu acolha o que surge sem aprisionar minha identidade ao que é transitório.",
  },
  {
    name: "Equanimidade",
    pali: "Upekkha",
    subtitle: "Permanecer estável sem se tornar indiferente",
    anchor:
      "Sereno não é quem nada sente, mas quem não entrega o leme a cada mudança do vento.",
    reflection:
      "Equanimidade é a capacidade de receber prazer e dor, elogio e crítica, ganho e perda sem perder o eixo ético. Ela não congela o afeto nem produz passividade. Ao contrário, permite responder de acordo com valores, e não apenas reagir ao impulso do momento. É uma liberdade de atitude cultivada pacientemente.",
    practice:
      "Antes de responder a algo que o perturbou, nomeie a emoção, reconheça sua intensidade e recorde o valor que deseja preservar.",
    aspiration:
      "Que eu permaneça sensível e, ao mesmo tempo, livre para escolher uma atitude digna.",
  },
  {
    name: "Ética consciente",
    pali: "Sila",
    subtitle: "Fazer de cada escolha uma semente de menor sofrimento",
    anchor:
      "A ética começa quando perguntamos não apenas o que podemos fazer, mas o que nossa ação produzirá no mundo.",
    reflection:
      "Sila orienta corpo, fala e mente para a redução do dano e o cultivo do bem. Diante de cada situação, podemos perguntar qual atitude preserva a dignidade, a verdade e o cuidado. A ética deixa então de ser obediência mecânica e se torna resposta consciente, respeitosa e verificável.",
    practice:
      "Revise uma decisão recente pelos seus efeitos sobre você, sobre os outros e sobre o ambiente comum. Repare o que for necessário.",
    aspiration:
      "Que minhas escolhas sejam coerentes com a dignidade que reconheço em cada vida.",
  },
  {
    name: "Esforço consciente",
    pali: "Virya",
    subtitle: "Avançar com constância, sem violência contra si mesmo",
    anchor:
      "O caminho amadurece pelo esforço fiel: nem a corda frouxa que não soa, nem a corda tensa que se rompe.",
    reflection:
      "Virya é energia colocada a serviço do que favorece clareza e libertação. Não é produtividade compulsiva. A vontade de sentido oferece direção a essa energia: quando existe um para quê valioso, o esforço deixa de ser mera agitação. A disciplina sábia combina intenção, medida, descanso e recomeço.",
    practice:
      "Escolha uma ação pequena, claramente possível e ligada a um valor. Realize-a por inteiro antes de acrescentar outra meta.",
    aspiration:
      "Que meu esforço seja alegre, constante e orientado ao que verdadeiramente importa.",
  },
  {
    name: "Autotranscendência",
    pali: "Dana e serviço",
    subtitle: "Encontrar-se ao dirigir a vida para além de si mesmo",
    anchor:
      "A existência se amplia quando nossa atenção alcança uma pessoa, uma tarefa ou uma causa que merece cuidado.",
    reflection:
      "A autotranscendência descreve a capacidade humana de sair do fechamento em si em direção a alguém ou a um valor. A generosidade budista lembra que oferecer também desfaz as fronteiras rígidas do ego. Servir não significa anular-se: é colocar a singularidade a serviço do mundo, com presença, discernimento e limites.",
    practice:
      "Pergunte quem ou o que necessita de uma contribuição que você realmente pode oferecer hoje. Faça-a sem transformar o gesto em espetáculo.",
    aspiration:
      "Que minha vida alcance além de mim e se torne presença útil no mundo.",
  },
  {
    name: "Libertação e sentido",
    pali: "Nibbana",
    subtitle: "Integrar o caminho e abrir espaço para uma paz não condicionada",
    anchor:
      "A liberdade começa onde cessamos de alimentar cegamente aquilo que produz sofrimento.",
    reflection:
      "Nibbana aponta para a cessação da ignorância, do apego e da aversão. No cotidiano, podemos reconhecer pequenos instantes dessa liberdade quando vemos com clareza e não repetimos automaticamente um padrão. A busca de sentido não promete controle total da vida; convida a uma resposta consciente, compassiva e responsável diante de cada situação.",
    practice:
      "Observe um hábito que alimenta sofrimento. Interrompa hoje apenas um elo da cadeia e escolha uma resposta mais livre.",
    aspiration:
      "Que eu reconheça o que aprisiona, cultive o que liberta e caminhe com sentido.",
  },
];

export const LENSES: DailyLens[] = [
  {
    title: "Chegar ao instante",
    focus:
      "Antes de procurar respostas grandiosas, é preciso chegar ao lugar onde a pergunta acontece. O instante presente contém limites, pessoas e possibilidades que não existiam exatamente assim ontem.",
    practice: "Faça uma atividade cotidiana sem dividir a atenção com outra tarefa.",
    question: "O que este momento está realmente me pedindo?",
  },
  {
    title: "Nomear sem condenar",
    focus:
      "Aquilo que conseguimos nomear com honestidade deixa de agir inteiramente nas sombras. Nomear não é julgar; é reconhecer a experiência para responder a ela com maior liberdade.",
    practice: "Dê um nome simples à emoção predominante, sem explicar nem justificar.",
    question: "Consigo reconhecer o que sinto sem transformar isso em identidade?",
  },
  {
    title: "A pausa que devolve liberdade",
    focus:
      "Entre o impulso e a ação pode nascer uma pausa. Pequena por fora, ela é imensa por dentro: ali podemos recordar valores, considerar consequências e escolher uma resposta.",
    practice: "Antes de uma resposta importante, faça três ciclos lentos de respiração.",
    question: "Que escolha se torna possível quando eu não reajo imediatamente?",
  },
  {
    title: "Observar a mente em movimento",
    focus:
      "A mente salta entre lembranças, previsões e julgamentos. A prática não consiste em castigá-la, mas em perceber cada partida e retornar, com paciência, ao que está diante de nós.",
    practice: "Observe por cinco minutos a respiração e conte cada retorno da atenção.",
    question: "Para onde minha mente costuma fugir quando o presente se torna difícil?",
  },
  {
    title: "O corpo como morada",
    focus:
      "A busca espiritual não acontece fora do corpo. Tensão, cansaço, ritmo e respiração oferecem informações valiosas sobre a maneira como estamos habitando a própria vida.",
    practice: "Percorra mentalmente o corpo dos pés à cabeça e alivie uma tensão possível.",
    question: "Que necessidade legítima meu corpo tenta comunicar?",
  },
  {
    title: "Distinguir dor e resistência",
    focus:
      "Uma parte da dor pertence ao acontecimento; outra pode nascer da luta para que ele já não tivesse ocorrido. Reconhecer essa diferença não apaga a perda, mas evita acrescentar sofrimento desnecessário.",
    practice: "Complete: “Isto dói porque…” e depois “Minha resistência acrescenta…”.",
    question: "O que precisa de cuidado e o que pode ser solto?",
  },
  {
    title: "A pergunta da vida",
    focus:
      "Quando deixamos de exigir que a vida explique tudo, podemos escutar a pergunta concreta que ela nos dirige. A resposta raramente é uma teoria; costuma ser um gesto.",
    practice: "Escreva uma ação pequena que somente você pode realizar hoje.",
    question: "Qual resposta concreta está ao meu alcance?",
  },
  {
    title: "Soltar uma exigência",
    focus:
      "Preferências são humanas; exigências rígidas tornam a paz dependente de um mundo perfeitamente obediente. Afrouxar uma exigência abre espaço para a realidade e para a ação possível.",
    practice: "Transforme um “tem que ser” em “eu gostaria, mas posso responder se não for”.",
    question: "Que exigência está me afastando da realidade?",
  },
  {
    title: "Cuidar sem possuir",
    focus:
      "O cuidado amadurece quando respeita a liberdade do outro. Podemos oferecer presença, palavra e ajuda, mas não viver a tarefa que pertence a outra pessoa.",
    practice: "Ofereça ajuda de forma clara e permita que o outro responda livremente.",
    question: "Meu cuidado fortalece ou controla?",
  },
  {
    title: "A dignidade do limite",
    focus:
      "Reconhecer um limite não é fracassar. É abandonar a fantasia de onipotência e concentrar energia na parte da realidade que ainda pode receber nossa resposta.",
    practice: "Divida uma folha entre “não controlo” e “posso escolher”. Aja na segunda coluna.",
    question: "Qual limite preciso respeitar para agir com mais inteireza?",
  },
  {
    title: "Gentileza consigo",
    focus:
      "A autocrítica pode fingir que promove mudança, mas frequentemente paralisa e estreita a consciência. A gentileza responsável reconhece a falha sem retirar da pessoa a possibilidade de recomeçar.",
    practice: "Fale consigo como falaria com alguém querido que deseja reparar um erro.",
    question: "Posso assumir responsabilidade sem me transformar em condenação?",
  },
  {
    title: "Ver a pessoa inteira",
    focus:
      "Quando reduzimos alguém ao seu pior gesto, diagnóstico ou conflito, perdemos o encontro. Ver a pessoa inteira não dispensa limites; impede apenas que o limite se torne desumanização.",
    practice: "Recorde uma qualidade real de alguém com quem você vive uma dificuldade.",
    question: "O que deixo de enxergar quando vejo apenas o problema?",
  },
  {
    title: "A palavra que não aumenta a dor",
    focus:
      "A fala correta não é silêncio cúmplice nem sinceridade cruel. Ela procura verdade, oportunidade e cuidado, sabendo que palavras também produzem consequências.",
    practice: "Antes de falar, pergunte: é verdadeiro, necessário, oportuno e respeitoso?",
    question: "Minha próxima palavra servirá à clareza ou apenas descarregará tensão?",
  },
  {
    title: "Escutar até o fim",
    focus:
      "Escutar é suspender por alguns instantes a preparação da própria resposta. Nesse espaço, o outro deixa de ser argumento e volta a ser presença.",
    practice: "Em uma conversa, faça uma pergunta aberta e não interrompa a resposta.",
    question: "O que posso compreender se não me apressar em concluir?",
  },
  {
    title: "Alegrar-se com o bem",
    focus:
      "A alegria altruísta combate a comparação que transforma o florescimento alheio em ameaça. O bem realizado por alguém amplia as possibilidades humanas e pode ser celebrado.",
    practice: "Reconheça sinceramente uma conquista ou qualidade de outra pessoa.",
    question: "Consigo receber a alegria do outro sem medir meu próprio valor?",
  },
  {
    title: "O valor escondido no cotidiano",
    focus:
      "O sentido não vive apenas nos grandes acontecimentos. Preparar, cuidar, cumprir, reparar e acompanhar podem realizar valores silenciosos que sustentam uma vida inteira.",
    practice: "Escolha uma tarefa comum e faça-a como expressão de um valor.",
    question: "Que valor pode ganhar corpo na próxima coisa simples que farei?",
  },
  {
    title: "Receber a beleza",
    focus:
      "Há momentos em que o sentido não pede produção, mas receptividade. A beleza da natureza, da arte ou de um encontro pode retirar-nos do fechamento e devolver profundidade ao mundo.",
    practice: "Contemple por alguns minutos algo belo sem fotografar, explicar ou possuir.",
    question: "O que muda quando permito que a beleza simplesmente me alcance?",
  },
  {
    title: "Reparar sem permanecer no passado",
    focus:
      "A culpa saudável aponta para um valor violado e chama à reparação. Depois de reconhecer, corrigir e aprender, permanecer na autopunição já não serve ao bem que desejamos restaurar.",
    practice: "Identifique uma reparação possível e dê hoje o primeiro passo.",
    question: "O que o arrependimento me pede que eu faça, não apenas que eu sinta?",
  },
  {
    title: "Responder ao inevitável",
    focus:
      "Quando uma circunstância não pode ser modificada, ainda resta a maneira de atravessá-la. Essa liberdade não elimina a dor, mas protege a dignidade e a direção.",
    practice: "Escolha uma qualidade que deseja preservar em meio a uma dificuldade.",
    question: "Quem desejo ser diante do que não posso mudar agora?",
  },
  {
    title: "Um passo suficiente",
    focus:
      "A mente pode exigir a solução de todo o caminho antes do primeiro passo. A realidade, porém, costuma pedir apenas uma ação possível e fiel ao sentido reconhecido.",
    practice: "Reduza uma meta importante à menor ação concreta realizável hoje.",
    question: "Qual passo é pequeno o bastante para ser feito e valioso o bastante para importar?",
  },
  {
    title: "Recomeçar sem espetáculo",
    focus:
      "Recomeços verdadeiros nem sempre chegam acompanhados de entusiasmo. Muitas vezes são discretos: retornar à prática, pedir desculpas, reorganizar o dia e tentar novamente.",
    practice: "Retome por dez minutos algo bom que foi abandonado.",
    question: "Que recomeço silencioso está esperando por mim?",
  },
  {
    title: "O humor que cria distância",
    focus:
      "O humor respeitoso pode diminuir o poder absoluto de um pensamento. Não ri da dor; ri da pretensão da mente de prever tudo, controlar tudo e ter sempre a última palavra.",
    practice: "Dê um apelido leve ao seu padrão mental mais repetitivo e perceba quando ele aparece.",
    question: "O que perde poder quando consigo olhar com um pouco de leveza?",
  },
  {
    title: "Servir sem se apagar",
    focus:
      "A autotranscendência não é abandono de si. Um serviço com sentido nasce do encontro entre uma necessidade real, uma capacidade pessoal e limites que preservam a continuidade do cuidado.",
    practice: "Ofereça algo útil e defina também o limite saudável desse gesto.",
    question: "Como posso contribuir sem transformar generosidade em esgotamento?",
  },
  {
    title: "A coragem de não saber",
    focus:
      "Nem toda incerteza precisa ser preenchida imediatamente. Permanecer diante do não saber pode interromper conclusões precipitadas e preparar uma compreensão mais honesta.",
    practice: "Escolha uma questão aberta e permita-se dizer: “Ainda não sei”.",
    question: "O que a pressa por uma resposta me impede de perceber?",
  },
  {
    title: "Gratidão sem negação",
    focus:
      "Gratidão não exige fingir que tudo está bem. Ela reconhece, dentro de uma realidade complexa, aquilo que ainda sustenta, acompanha ou oferece uma possibilidade.",
    practice: "Registre algo difícil e, ao lado, algo real que continua sendo fonte de apoio.",
    question: "O que merece ser reconhecido sem que eu negue a dificuldade?",
  },
  {
    title: "Escolher o que alimentar",
    focus:
      "Pensamentos surgem sem convite, mas a atenção continuada funciona como alimento. Podemos notar uma narrativa sem oferecer a ela repetição ilimitada.",
    practice: "Ao perceber ruminação, volte a atenção para uma tarefa externa e significativa.",
    question: "Que conteúdo estou fortalecendo pela repetição?",
  },
  {
    title: "Comunidade e pertencimento",
    focus:
      "Ninguém realiza sozinho todas as possibilidades de uma vida. Comunidade oferece testemunho, correção, apoio e oportunidades de contribuir sem perder a singularidade.",
    practice: "Procure alguém de confiança e compartilhe uma necessidade ou ofereça presença.",
    question: "Onde posso pertencer com responsabilidade e verdade?",
  },
  {
    title: "Silêncio que escuta",
    focus:
      "O silêncio não é apenas ausência de som. Quando deixa de ser fuga, ele cria um espaço em que impulsos se aquietam e valores antes abafados podem ser percebidos.",
    practice: "Permaneça cinco minutos sem telas, música ou fala, apenas atento ao que surge.",
    question: "Que voz interior só consigo ouvir quando diminuo o ruído?",
  },
  {
    title: "Celebrar o que foi realizado",
    focus:
      "O que foi vivido com sentido não pode ser retirado da história. Reconhecer o bem já realizado protege contra a ideia de que apenas o futuro dará valor à existência.",
    practice: "Recorde uma escolha da qual se orgulha e o valor que ela concretizou.",
    question: "Que sentido já está guardado na história da minha vida?",
  },
  {
    title: "Preparar o amanhã no presente",
    focus:
      "O futuro pode orientar sem sequestrar o agora. Uma possibilidade significativa se torna fecunda quando inspira uma ação presente, em vez de alimentar apenas fantasia ou ansiedade.",
    practice: "Escolha uma possibilidade futura e realize hoje uma preparação de quinze minutos.",
    question: "Que futuro me chama a uma atitude concreta agora?",
  },
  {
    title: "Integrar e seguir",
    focus:
      "Integrar não é encerrar todas as perguntas. É reunir aprendizado, perda, gratidão e responsabilidade, permitindo que a experiência se transforme em direção para o próximo ciclo.",
    practice: "Escreva: “Eu reconheço…”, “Eu agradeço…” e “Eu escolho…”.",
    question: "O que levo comigo e o que já posso deixar partir?",
  },
];

export const MEDITATION_STEPS = [
  [
    "Ajuste a postura com dignidade, sem rigidez.",
    "Acompanhe três respirações sem tentar modificá-las.",
    "Pergunte em silêncio qual resposta preserva o valor deste dia.",
  ],
  [
    "Perceba os pontos de contato do corpo com o lugar.",
    "Nomeie suavemente: sensação, pensamento, emoção.",
    "Deixe cada experiência passar e retorne ao que importa agora.",
  ],
  [
    "Inspire reconhecendo a realidade como ela se apresenta.",
    "Expire soltando a exigência de controlar tudo.",
    "Permaneça alguns instantes disponível para a ação possível.",
  ],
  [
    "Traga à mente uma pessoa que necessita de cuidado.",
    "Reconheça sua humanidade, seus limites e sua dignidade.",
    "Deseje que sua atitude de hoje não aumente o sofrimento.",
  ],
  [
    "Observe um pensamento recorrente como evento passageiro.",
    "Diga mentalmente: “Há um pensamento; ainda existe uma escolha”.",
    "Volte a atenção para uma tarefa ou presença significativa.",
  ],
  [
    "Recorde algo que mudou e já não pode ser retido.",
    "Agradeça o que essa experiência tornou possível.",
    "Abra as mãos e acolha o próximo passo sem pressa.",
  ],
  [
    "Reconheça uma dificuldade sem exagerá-la nem diminuí-la.",
    "Pergunte o que pode ser mudado e o que pede aceitação.",
    "Escolha uma atitude simples, compassiva e responsável.",
  ],
];

export function buildDays() {
  const days = [];
  let index = 0;
  for (let month = 0; month < 12; month += 1) {
    for (let day = 1; day <= MONTH_DAYS[month]; day += 1) {
      const theme = MONTHS[month];
      const lens = LENSES[(day - 1) % LENSES.length];
      days.push({
        index,
        month,
        day,
        monthName: MONTH_NAMES[month],
        theme,
        lens,
        meditation: MEDITATION_STEPS[index % MEDITATION_STEPS.length],
      });
      index += 1;
    }
  }
  return days;
}

export const ALL_DAYS = buildDays();
