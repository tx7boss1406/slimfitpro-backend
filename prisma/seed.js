// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed das missões...");

  await prisma.mission.createMany({
    data: [
      {
        title: "Treino Energético de 20 minutos",
        description: "Complete 20 minutos de treino funcional com intensidade moderada.",
        dayNumber: 1,
        xpReward: 50,
        details: {
          objetivo: "Acelerar o metabolismo, aumentar resistência e melhorar o condicionamento físico geral.",
          dicas: [
            "Comece com um aquecimento leve de 3 minutos (polichinelos, corrida no lugar).",
            "Mantenha cada exercício por 40 segundos com 20 segundos de descanso.",
            "Concentre-se na forma correta para evitar lesões.",
          ],
          beneficios: [
            "Aumenta o gasto calórico.",
            "Melhora a força muscular.",
            "Estimula a energia e disposição para o dia.",
          ],
          miniDesafios: [
            "Adicionar 10 agachamentos extras após cada circuito.",
            "Manter a postura correta durante todo o treino.",
          ],
        },
      },
      {
        title: "Treino de Força Feminina de 25 minutos",
        description: "Realize 25 minutos de treino de força focado em membros inferiores e core.",
        dayNumber: 2,
        xpReward: 60,
        details: {
          objetivo: "Fortalecer pernas, glúteos e abdômen, melhorando postura e equilíbrio.",
          dicas: [
            "Agachamento: pés na largura dos ombros, desça como se fosse sentar em uma cadeira, mantendo o peito erguido e joelhos alinhados com os pés.",
            "Afundo (lunge): dê um passo à frente, desça até o joelho de trás quase tocar o chão, mantendo tronco ereto e abdômen contraído.",
            "Prancha: apoie antebraços e ponta dos pés no chão, mantenha coluna reta e abdômen firme. Respire profundamente durante o tempo de execução.",
            "Elevação de quadril: deitada de costas, pés apoiados no chão, eleve o quadril formando uma linha reta dos ombros aos joelhos, contraindo glúteos no topo do movimento.",
          ],
          beneficios: [
            "Tonifica glúteos e pernas.",
            "Aumenta a força do core.",
            "Melhora estabilidade e postura.",
          ],
          miniDesafios: [
            "Segurar a prancha por 20 segundos a mais no final de cada série.",
            "Adicionar 5 elevações de quadril extras por série.",
          ],
        },
      },
      {
        title: "Treino Cardio Dance de 30 minutos",
        description: "Participe de uma sessão de dança aeróbica para queimar calorias e se divertir.",
        dayNumber: 3,
        xpReward: 55,
        details: {
          objetivo: "Aumentar resistência cardiovascular e estimular a coordenação motora com ritmo e diversão.",
          dicas: [
            "Passo básico de dança: mantenha joelhos levemente flexionados e movimente os braços de forma natural acompanhando os pés.",
            "Polichinelo: abra e feche pernas e braços mantendo o tronco ereto e abdômen contraído.",
            "Knee lift: levante o joelho alternadamente até a altura do quadril, mantendo ombros relaxados e abdômen firme.",
            "Twist: gire o tronco para um lado e outro mantendo quadris firmes, pés fixos no chão.",
          ],
          beneficios: [
            "Queima calorias rapidamente.",
            "Melhora coordenação e ritmo.",
            "Aumenta disposição e bom humor.",
          ],
          miniDesafios: [
            "Tentar manter o sorriso e energia durante toda a aula.",
            "Adicionar 3 minutos extras de pulos ao final da sessão.",
          ],
        },
      },
      {
        title: "Treino de Yoga e Alongamento de 20 minutos",
        description: "Complete 20 minutos de yoga focando em alongamento, respiração e relaxamento.",
        dayNumber: 4,
        xpReward: 50,
        details: {
          objetivo: "Melhorar flexibilidade, reduzir tensão muscular e aumentar o foco mental.",
          dicas: [
            "Postura da criança: sente-se sobre os calcanhares, braços estendidos à frente ou ao lado do corpo, testa no chão.",
            "Cachorro olhando para baixo: mãos e pés no chão, quadris levantados formando um 'V' invertido.",
            "Guerreiro II: afaste pernas, dobre o joelho da frente, braços paralelos ao chão, olhe para a mão da frente.",
            "Ponte: deite de costas, pés apoiados, eleve quadril contraindo glúteos, mantendo coluna alinhada.",
          ],
          beneficios: [
            "Aumenta flexibilidade.",
            "Reduz estresse e tensão muscular.",
            "Melhora concentração e equilíbrio mental.",
          ],
          miniDesafios: [
            "Manter cada postura por 15 segundos a mais do que o indicado.",
            "Executar a sequência sem pausas entre os exercícios.",
          ],
        },
      },
      {
        title: "Treino HIIT Feminino de 15 minutos",
        description: "Complete 15 minutos de treino intervalado de alta intensidade (HIIT).",
        dayNumber: 5,
        xpReward: 65,
        details: {
          objetivo: "Queimar gordura, acelerar metabolismo e melhorar resistência física em pouco tempo.",
          dicas: [
            "Burpees: agache, coloque mãos no chão, chute pernas para trás, faça uma flexão e volte à posição de pé.",
            "Polichinelos: pés abrem e fecham enquanto braços sobem e descem, mantendo postura ereta.",
            "Mountain climbers: leve joelhos alternadamente ao peito mantendo abdômen contraído.",
            "Agachamento com salto: agache mantendo joelhos alinhados e peito erguido, depois salte explosivamente.",
          ],
          beneficios: [
            "Acelera o metabolismo e queima calorias rapidamente.",
            "Melhora condicionamento cardiovascular.",
            "Aumenta resistência muscular.",
          ],
          miniDesafios: [
            "Adicionar 5 repetições extras em cada exercício.",
            "Tentar manter a intensidade máxima durante todos os intervalos.",
          ],
        },
      },
      {
        title: "Pilates para Core de 20 minutos",
        description: "Fortaleça abdômen, lombar e postura com exercícios de Pilates.",
        dayNumber: 6,
        xpReward: 55,
        details: {
          objetivo: "Melhorar força do core, postura e controle do corpo.",
          dicas: [
            "The Hundred: pernas elevadas em 90°, braços ao lado do corpo. Bata os braços para cima e para baixo.",
            "Roll-Up: levante o tronco lentamente até tocar os pés, depois desça devagar.",
            "Prancha lateral: mantenha quadril levantado e corpo em linha reta.",
          ],
          beneficios: [
            "Fortalece abdômen e lombar.",
            "Melhora postura e equilíbrio.",
            "Aumenta consciência corporal.",
          ],
          miniDesafios: [
            "Executar 5 repetições extras de Roll-Up.",
            "Manter prancha lateral 10 segundos a mais de cada lado.",
          ],
        },
      },
      {
        title: "Treino de Glúteos e Pernas de 25 minutos",
        description: "Foque em tonificação e fortalecimento de pernas e glúteos.",
        dayNumber: 7,
        xpReward: 60,
        details: {
          objetivo: "Modelar pernas e glúteos, melhorar força e estabilidade.",
          dicas: [
            "Agachamento sumô: pés afastados, desça mantendo coluna ereta.",
            "Step-up: suba em um degrau com um pé de cada vez, tronco ereto.",
            "Kickback: estenda uma perna para trás mantendo abdômen contraído.",
          ],
          beneficios: [
            "Tonifica glúteos e pernas.",
            "Melhora equilíbrio e postura.",
            "Aumenta força muscular localizada.",
          ],
          miniDesafios: [
            "Adicionar 10 agachamentos sumô extras ao final.",
            "Manter cada kickback por 2 segundos no topo.",
          ],
        },
      },
      {
        title: "Treino Jump e Cardio de 20 minutos",
        description: "Aumente ritmo cardíaco, queime calorias e divirta-se com saltos e movimentos dinâmicos.",
        dayNumber: 8,
        xpReward: 55,
        details: {
          objetivo: "Queimar gordura, melhorar resistência cardiovascular e agilidade.",
          dicas: [
            "Jump básico: salte levemente com joelhos flexionados.",
            "Saltos laterais: salte de um lado para o outro mantendo ritmo.",
            "Pular corda imaginária: simule corda girando com os punhos.",
          ],
          beneficios: [
            "Melhora resistência cardiovascular.",
            "Aumenta gasto calórico.",
            "Fortalece pernas e melhora coordenação.",
          ],
          miniDesafios: [
            "Adicionar 1 minuto extra de pular corda.",
            "Manter ritmo constante durante todos os saltos.",
          ],
        },
      },
      {
        title: "Core Challenge de 15 minutos",
        description: "Fortaleça abdômen e lombar com exercícios intensos de core.",
        dayNumber: 9,
        xpReward: 60,
        details: {
          objetivo: "Aumentar força abdominal, estabilidade da coluna e resistência muscular.",
          dicas: [
            "Prancha frontal: apoie antebraços e ponta dos pés, abdômen firme.",
            "Bicicleta no ar: movimente pernas como pedalando, levando cotovelos alternadamente.",
            "Elevação de pernas: eleve pernas até 90° e desça lentamente.",
          ],
          beneficios: [
            "Fortalece abdômen e lombar.",
            "Melhora postura e estabilidade.",
            "Aumenta resistência do core.",
          ],
          miniDesafios: [
            "Adicionar 10 segundos extras em cada prancha.",
            "Executar 5 repetições extras de elevação de pernas.",
          ],
        },
      },
      {
        title: "Treino Full Body de 20 minutos",
        description: "Exercícios para fortalecer todo o corpo em pouco tempo.",
        dayNumber: 10,
        xpReward: 70,
        details: {
          objetivo: "Trabalhar braços, pernas, glúteos e core, aumentando resistência e força geral.",
          dicas: [
            "Agachamento com braços estendidos: desça mantendo coluna reta.",
            "Flexão de braço: cotovelos próximos ao corpo, abdômen firme.",
            "Prancha com toque de ombro: toque alternadamente cada ombro.",
          ],
          beneficios: [
            "Fortalece todo o corpo.",
            "Aumenta resistência muscular.",
            "Melhora coordenação e postura.",
          ],
          miniDesafios: [
            "Adicionar 5 repetições extras de flexão.",
            "Manter prancha com toque de ombro 10 segundos a mais.",
          ],
        },
      },
      {
  title: "Treino Cardio Burner de 18 minutos",
  description: "Sequência intensa para acelerar o metabolismo rapidamente.",
  dayNumber: 11,
  xpReward: 75,
  details: {
    objetivo: "Aumentar gasto calórico e melhorar condicionamento cardiorrespiratório.",
    dicas: [
      "Faça polichinelos mantendo ritmo firme.",
      "Elevação de joelhos: mantenha abdômen ativo.",
      "Corrida parada: tente aumentar a velocidade nos últimos 20 segundos.",
    ],
    beneficios: [
      "Aumenta a queima de gordura.",
      "Melhora capacidade pulmonar.",
      "Aumenta energia para o dia inteiro.",
    ],
    miniDesafios: [
      "Aumentar 15 segundos no último bloco de corrida parada.",
      "Realizar 10 polichinelos extras ao final.",
    ],
  },
},
{
  title: "Força Feminina – Pernas de Aço",
  description: "Treino focado em coxas, panturrilhas e glúteos.",
  dayNumber: 12,
  xpReward: 80,
  details: {
    objetivo: "Tonificar e fortalecer a parte inferior do corpo.",
    dicas: [
      "Agachamento lateral mantendo o peito aberto.",
      "Afundo: atenção à postura do joelho da frente.",
      "Elevação de panturrilha com abdômen contraído.",
    ],
    beneficios: [
      "Tonifica coxas e glúteos.",
      "Melhora equilíbrio e estabilidade.",
      "Aumenta força funcional das pernas.",
    ],
    miniDesafios: [
      "Adicionar 20 segundos de agachamento isométrico.",
      "Fazer 15 elevações de panturrilha extras.",
    ],
  },
},
{
  title: "Desafio Core Avançado de 12 minutos",
  description: "Um treino rápido porém poderoso para abdômen e lombar.",
  dayNumber: 13,
  xpReward: 85,
  details: {
    objetivo: "Fortalecer o core para melhorar postura e evitar dores.",
    dicas: [
      "Prancha tradicional com quadris alinhados.",
      "Abdominais curtos com respiração controlada.",
      "Bicicleta: não esqueça de rodar o tronco.",
    ],
    beneficios: [
      "Melhora postura.",
      "Diminui dores na lombar.",
      "Define a região abdominal.",
    ],
    miniDesafios: [
      "Realizar prancha lateral por 20 segundos cada lado.",
      "Adicionar 10 repetições de abdominal bicicleta.",
    ],
  },
},
{
  title: "Yoga Power Flow – 15 min",
  description: "Sequência fluida de yoga para força e mobilidade.",
  dayNumber: 14,
  xpReward: 90,
  details: {
    objetivo: "Aumentar flexibilidade, mobilidade e foco mental.",
    dicas: [
      "Respire profundamente em cada postura.",
      "Mantenha ombros relaxados.",
      "Na postura do guerreiro, firme o pé de trás.",
    ],
    beneficios: [
      "Reduz estresse e ansiedade.",
      "Melhora mobilidade das articulações.",
      "Aumenta força estabilizadora.",
    ],
    miniDesafios: [
      "Segurar postura da prancha por 30 segundos extras.",
      "Aumentar amplitude na postura do guerreiro.",
    ],
  },
},
{
  title: "Treino HIT Turbo de 10 minutos",
  description: "Série rápida e intensa ideal para quem tem pouco tempo.",
  dayNumber: 15,
  xpReward: 95,
  details: {
    objetivo: "Elevar batimentos e estimular a queima de gordura em pouco tempo.",
    dicas: [
      "Siga o ritmo do timer sem pausas longas.",
      "Burpees: realize na sua própria velocidade.",
      "Saltos laterais com leve flexão de joelhos.",
    ],
    beneficios: [
      "Queima calorias rapidamente.",
      "Aumenta desempenho cardiovascular.",
      "Melhora explosão muscular.",
    ],
    miniDesafios: [
      "Adicionar 2 burpees a cada bloco.",
      "Aumentar 10 segundos no último salto lateral.",
    ],
  },
},
{
  title: "Alongamento Completo de 15 minutos",
  description: "Rotina completa para destravar o corpo.",
  dayNumber: 16,
  xpReward: 70,
  details: {
    objetivo: "Reduzir rigidez, melhorar circulação e aumentar elasticidade.",
    dicas: [
      "Segure cada alongamento por no mínimo 20 segundos.",
      "Nunca force até sentir dor forte.",
      "Mantenha respiração lenta e profunda.",
    ],
    beneficios: [
      "Melhora flexibilidade.",
      "Reduz dores musculares.",
      "Aumenta bem-estar geral.",
    ],
    miniDesafios: [
      "Aumentar 10 segundos por postura.",
      "Alongar a postura da borboleta até encostar mais ao chão.",
    ],
  },
},
{
  title: "Pernas e Glúteos Explosivos",
  description: "Treino intenso para definir e fortalecer parte inferior.",
  dayNumber: 17,
  xpReward: 85,
  details: {
    objetivo: "Criar resistência muscular e melhorar estética das pernas.",
    dicas: [
      "Agachamento com salto: aterrise suave.",
      "Afundo estático: foco no quadríceps e glúteos.",
      "Elevação de quadril mantendo abdômen ativo.",
    ],
    beneficios: [
      "Tonifica glúteos.",
      "Trabalha coxas intensamente.",
      "Aumenta explosão e potência.",
    ],
    miniDesafios: [
      "Adicionar 10 agachamentos com salto.",
      "Manter elevação de quadril isométrica por 20 segundos.",
    ],
  },
},
{
  title: "Cardio Dance – Queime Dançando",
  description: "Rotina divertida de dança para emagrecimento.",
  dayNumber: 18,
  xpReward: 80,
  details: {
    objetivo: "Queimar calorias de forma leve e prazerosa.",
    dicas: [
      "Mantenha movimentos amplos.",
      "Use os braços para aumentar gasto calórico.",
      "Evite travar quadris; deixe o corpo solto.",
    ],
    beneficios: [
      "Queima calorias sem esforço mental.",
      "Melhora coordenação motora.",
      "Aumenta autoestima e disposição.",
    ],
    miniDesafios: [
      "Aumentar ritmo nos dois últimos minutos.",
      "Adicionar 10 passos extras mais rápidos no final.",
    ],
  },
},
{
  title: "Treino Funcional – Corpo Forte",
  description: "Série completa para fortalecer músculos do corpo todo.",
  dayNumber: 19,
  xpReward: 90,
  details: {
    objetivo: "Estimular força geral e estabilidade.",
    dicas: [
      "Mantenha movimentos controlados.",
      "Respire corretamente em cada repetição.",
      "Deixe o core sempre ativo.",
    ],
    beneficios: [
      "Fortalece todo o corpo.",
      "Melhora equilíbrio.",
      "Aumenta resistência muscular.",
    ],
    miniDesafios: [
      "Adicionar 5 repetições em cada exercício.",
      "Manter prancha final por 20 segundos extras.",
    ],
  },
},
{
  title: "Desafio de Resistência Máxima – 12 minutos",
  description: "Treino final para testar evolução e disciplina.",
  dayNumber: 20,
  xpReward: 120,
  details: {
    objetivo: "Avaliar resistência cardiovascular e muscular.",
    dicas: [
      "Pace constante: não comece rápido demais.",
      "Controle respiração para manter ritmo.",
      "Use braços e pernas juntos para gerar potência.",
    ],
    beneficios: [
      "Aumenta capacidade de esforço.",
      "Melhora força mental.",
      "Evidencia evolução e disciplina.",
    ],
    miniDesafios: [
      "Adicionar 30 segundos de corrida estacionária final.",
      "Realizar 12 burpees ao terminar.",
    ],
  },
},
{
  title: "Treino HIIT Feminino – Impacto Zero",
  description: "Série intensa sem saltos, perfeita para queimar gordura sem impacto.",
  dayNumber: 21,
  xpReward: 85,
  details: {
    objetivo: "Aumentar condicionamento e acelerar metabolismo sem exigir saltos.",
    dicas: [
      "Elevação de joelhos sem impacto, mas com braços firmes.",
      "Agachamento profundo mantendo calcanhares no chão.",
      "Passada lateral mantendo quadris estáveis.",
    ],
    beneficios: [
      "Ideal para quem evita impacto.",
      "Aumenta resistência cardiovascular.",
      "Auxilia no emagrecimento.",
    ],
    miniDesafios: [
      "Adicionar 20 segundos ao último bloco.",
      "Aumentar amplitude dos movimentos laterais.",
    ],
  },
},
{
  title: "Glúteo de Aço – 15 minutos",
  description: "Treino isolado e altamente eficiente para levantar e firmar glúteos.",
  dayNumber: 22,
  xpReward: 95,
  details: {
    objetivo: "Trabalhar a ativação máxima dos glúteos.",
    dicas: [
      "Elevação pélvica pressionando calcanhares no chão.",
      "Abdução lateral com abdômen contraído.",
      "Agachamento sumô focando no glúteo médio.",
    ],
    beneficios: [
      "Aumenta volume e firmeza dos glúteos.",
      "Melhora estabilidade do quadril.",
      "Reduz dores lombares.",
    ],
    miniDesafios: [
      "Manter elevação pélvica isométrica por 25 segundos.",
      "Adicionar 15 abduções extras.",
    ],
  },
},
{
  title: "Treino Abdominal – Six Pack Builder",
  description: "Sequência intensa para definição do abdômen.",
  dayNumber: 23,
  xpReward: 100,
  details: {
    objetivo: "Definir a musculatura da região central.",
    dicas: [
      "Execute movimentos curtos, focando na contração.",
      "Controle a respiração.",
      "Evite puxar o pescoço com as mãos.",
    ],
    beneficios: [
      "Melhora postura.",
      "Define abdômen.",
      "Aumenta força do core.",
    ],
    miniDesafios: [
      "Adicionar 20 segundos de prancha curta.",
      "Fazer 10 repetições extras de abdominal canivete.",
    ],
  },
},
{
  title: "Mobilidade Completa – 12 minutos",
  description: "Rotina fluida para destravar articulações e melhorar performance.",
  dayNumber: 24,
  xpReward: 70,
  details: {
    objetivo: "Melhorar amplitude, circulação e prevenir lesões.",
    dicas: [
      "Movimentos lentos e controlados.",
      "Respiração profunda durante cada transição.",
      "Não force além do seu limite.",
    ],
    beneficios: [
      "Aumenta mobilidade geral.",
      "Reduz rigidez muscular.",
      "Melhora desempenho nos treinos.",
    ],
    miniDesafios: [
      "Aumentar 15 segundos por movimento.",
      "Alongar posterior com maior amplitude.",
    ],
  },
},
{
  title: "Cardio Nível 2 – Resistência Extrema",
  description: "Treino para elevar o condicionamento a um novo patamar.",
  dayNumber: 25,
  xpReward: 110,
  details: {
    objetivo: "Aumentar resistência e disposição para o dia inteiro.",
    dicas: [
      "Mantenha ritmo constante.",
      "Eleve braços para aumentar intensidade.",
      "Cuidado para não travar o quadril nos movimentos rápidos.",
    ],
    beneficios: [
      "Melhora resistência.",
      "Aumenta energia.",
      "Acelera metabolismo.",
    ],
    miniDesafios: [
      "Aumentar 40 segundos no último bloco.",
      "Adicionar 10 elevações de joelho extras.",
    ],
  },
},
{
  title: "Treino Funcional Multidimensional",
  description: "Mistura de força, mobilidade e estabilidade.",
  dayNumber: 26,
  xpReward: 120,
  details: {
    objetivo: "Melhorar força global com movimentos completos.",
    dicas: [
      "Mantenha alinhamento da coluna.",
      "Tente controlar o retorno dos movimentos.",
      "Use respiração para ganhar ritmo.",
    ],
    beneficios: [
      "Aumenta força e coordenação.",
      "Melhora equilíbrio.",
      "Trabalha vários músculos ao mesmo tempo.",
    ],
    miniDesafios: [
      "Fazer 8 repetições adicionais em cada exercício.",
      "Aumentar 15 segundos na prancha final.",
    ],
  },
},
{
  title: "Treino de Braços e Ombros – 10 minutos",
  description: "Fortalece membros superiores mesmo sem equipamentos.",
  dayNumber: 27,
  xpReward: 80,
  details: {
    objetivo: "Trabalhar tríceps, bíceps e ombros com peso corporal.",
    dicas: [
      "Flexão inclinada para facilitar.",
      "Tríceps no banco mantendo cotovelos fechados.",
      "Elevação frontal sem peso, focando em isometria.",
    ],
    beneficios: [
      "Define parte superior do corpo.",
      "Aumenta força funcional.",
      "Melhora postura de ombros.",
    ],
    miniDesafios: [
      "Adicionar 10 flexões inclinadas.",
      "Segurar elevação isométrica por 20 segundos.",
    ],
  },
},
{
  title: "Desafio Intensivo de Glúteos + Pernas",
  description: "Série combinada para queima e força simultânea.",
  dayNumber: 28,
  xpReward: 130,
  details: {
    objetivo: "Criar estímulo máximo para pernas e glúteos.",
    dicas: [
      "Agache até onde sua mobilidade permitir.",
      "Contraia glúteos no topo da elevação.",
      "Mantenha abdômen firme para estabilidade.",
    ],
    beneficios: [
      "Aumenta firmeza dos glúteos.",
      "Define coxas.",
      "Melhora equilíbrio.",
    ],
    miniDesafios: [
      "Adicionar 20 segundos de agachamento isométrico.",
      "Fazer 20 repetições extras de elevação de quadril.",
    ],
  },
},
{
  title: "Alongamento de Flexibilidade Avançado",
  description: "Rotina para quem busca mais elasticidade.",
  dayNumber: 29,
  xpReward: 75,
  details: {
    objetivo: "Aumentar flexibilidade e reduzir tensão muscular.",
    dicas: [
      "Segure cada alongamento por 30 a 40 segundos.",
      "Evite movimentos bruscos.",
      "Respire fundo para facilitar relaxamento.",
    ],
    beneficios: [
      "Reduz estresse corporal.",
      "Melhora postura.",
      "Aumenta mobilidade articular.",
    ],
    miniDesafios: [
      "Alongar isquiotibiais por mais 20 segundos.",
      "Tentar tocar os pés mantendo joelhos estendidos.",
    ],
  },
},
{
  title: "Treino Final – Ultra Desafio",
  description: "A missão mais intensa deste ciclo para testar sua evolução.",
  dayNumber: 30,
  xpReward: 150,
  details: {
    objetivo: "Levar corpo e mente ao máximo da sua capacidade.",
    dicas: [
      "Não comece rápido demais.",
      "Controle respiração do início ao fim.",
      "Foque na execução, não na velocidade.",
    ],
    beneficios: [
      "Revela evolução completa.",
      "Aumenta força mental e disciplina.",
      "Melhora condicionamento avançado.",
    ],
    miniDesafios: [
      "Completar 1 minuto extra de corrida no final.",
      "Realizar 15 burpees ao concluir.",
    ],
  },
},
{
  title: "Desafio de Potência – Sprint Controlado",
  description: "Um treino avançado para elevar sua velocidade máxima.",
  dayNumber: 31,
  xpReward: 120,
  details: {
    objetivo: "Aumentar velocidade e potência muscular.",
    dicas: [
      "Mantenha postura ereta durante o sprint.",
      "Use passadas curtas e rápidas.",
      "Aqueça bem antes de iniciar.",
    ],
    beneficios: [
      "Aumento de explosão muscular.",
      "Melhora do condicionamento cardiovascular.",
      "Aprimora coordenação motora.",
    ],
    miniDesafios: [
      "Completar 5 sprints de 30 segundos.",
      "Descansar apenas 45 segundos entre cada sprint.",
    ],
  },
},
{
  title: "Força Avançada – Core de Aço",
  description: "Desafio intenso focado na ativação profunda do core.",
  dayNumber: 32,
  xpReward: 130,
  details: {
    objetivo: "Fortalecer abdômen, lombar e estabilizadores.",
    dicas: [
      "Mantenha o abdômen contraído o tempo todo.",
      "Respire corretamente para não perder rendimento.",
      "Não curve a lombar.",
    ],
    beneficios: [
      "Melhora postura.",
      "Aumenta estabilidade do tronco.",
      "Previne dores lombares.",
    ],
    miniDesafios: [
      "2 minutos de prancha sem parar.",
      "40 repetições de abdominal canivete.",
    ],
  },
},
{
  title: "Missão Elite – Resistência Extrema",
  description: "Um treino completo de alta duração para testar limites.",
  dayNumber: 33,
  xpReward: 140,
  details: {
    objetivo: "Elevar a capacidade cardiorrespiratória ao máximo.",
    dicas: [
      "Mantenha ritmo moderado e constante.",
      "Hidrate-se antes e depois.",
      "Não pare — apenas reduza a intensidade se necessário.",
    ],
    beneficios: [
      "Melhora fôlego e stamina.",
      "Fortalece musculatura geral.",
      "Aumenta resiliência física.",
    ],
    miniDesafios: [
      "20 minutos contínuos sem parar.",
      "5 minutos finais acelerando o ritmo.",
    ],
  },
},
{
  title: "Controle Corporal – Power Balance",
  description: "Um treino avançado para domínio e equilíbrio corporal.",
  dayNumber: 34,
  xpReward: 110,
  details: {
    objetivo: "Desenvolver equilíbrio e controle muscular fino.",
    dicas: [
      "Foque na concentração.",
      "Ative o core antes de cada exercício.",
      "Mantenha movimentos lentos e precisos.",
    ],
    beneficios: [
      "Melhora coordenação.",
      "Aumenta estabilidade articular.",
      "Fortalece músculos profundos.",
    ],
    miniDesafios: [
      "1 minuto de apoio unilateral em cada perna.",
      "20 pistol squats alternados.",
    ],
  },
},
{
  title: "Treino Pesado – Explosão Total",
  description: "Sessão avançada de força e explosão muscular.",
  dayNumber: 35,
  xpReward: 150,
  details: {
    objetivo: "Aumentar força máxima e potência.",
    dicas: [
      "Execute movimentos com técnica impecável.",
      "Use respiração explosiva.",
      "Não faça repetições rápidas demais.",
    ],
    beneficios: [
      "Aumento de força bruta.",
      "Melhora capacidade de aceleração.",
      "Fortalecimento completo do corpo.",
    ],
    miniDesafios: [
      "30 saltos pliométricos.",
      "20 flexões explosivas batendo palma.",
    ],
  },
},
{
  title: "Ultra Cardio – Fogo nos Pulmões",
  description: "Um treino avançado que leva seu cardio ao extremo.",
  dayNumber: 36,
  xpReward: 140,
  details: {
    objetivo: "Aumentar VO2 máximo e capacidade de oxigenação.",
    dicas: [
      "Respire pelo nariz sempre que possível.",
      "Mantenha cadência firme.",
      "Evite parar totalmente.",
    ],
    beneficios: [
      "Aumento de resistência prolongada.",
      "Melhora circulação sanguínea.",
      "Eleva performance geral.",
    ],
    miniDesafios: [
      "10 minutos de HIIT avançado.",
      "Finalizar com 2 minutos de corrida máxima.",
    ],
  },
},
{
  title: "Mobilidade Suprema – Corpo Livre",
  description: "Sequência avançada para liberar articulações e músculos.",
  dayNumber: 37,
  xpReward: 100,
  details: {
    objetivo: "Aumentar mobilidade e amplitude de movimento.",
    dicas: [
      "Movimente-se devagar.",
      "Mantenha respiração fluida.",
      "Não force nada que cause dor.",
    ],
    beneficios: [
      "Previne lesões.",
      "Melhora desempenho nos treinos seguintes.",
      "Aumenta flexibilidade geral.",
    ],
    miniDesafios: [
      "3 séries de mobilidade de quadril.",
      "Alongamento final de 5 minutos.",
    ],
  },
},
{
  title: "Força Mental – Desafio de Persistência",
  description: "Treino focado em repetição e mentalidade de perseverança.",
  dayNumber: 38,
  xpReward: 160,
  details: {
    objetivo: "Treinar disciplina e resiliência física.",
    dicas: [
      "Ritmo constante é a chave.",
      "Não desista antes do tempo.",
      "Respire fundo quando cansar.",
    ],
    beneficios: [
      "Aprimora autodisciplina.",
      "Aumenta tolerância ao esforço.",
      "Melhora capacidade mental sob pressão.",
    ],
    miniDesafios: [
      "100 agachamentos.",
      "50 flexões (pode dividir).",
    ],
  },
},
{
  title: "Supremacia Funcional – Corpo Completo",
  description: "Rotina avançada combinando força, cardio e mobilidade.",
  dayNumber: 39,
  xpReward: 150,
  details: {
    objetivo: "Desenvolver eficiência total do corpo.",
    dicas: [
      "Transições rápidas entre exercícios.",
      "Hidrate-se durante o treino.",
      "Mantenha boa postura.",
    ],
    beneficios: [
      "Fortalecimento global.",
      "Melhora agilidade e resistência.",
      "Aumenta capacidade funcional.",
    ],
    miniDesafios: [
      "3 rounds sem descanso.",
      "30 segundos extras no final.",
    ],
  },
},
{
  title: "Ascensão Máxima – O Pico da Jornada",
  description: "A missão final deste ciclo, unindo tudo que você aprendeu.",
  dayNumber: 40,
  xpReward: 200,
  details: {
    objetivo: "Integrar força, velocidade, resistência e foco mental.",
    dicas: [
      "Comece com aquecimento completo.",
      "Mantenha ritmo forte do início ao fim.",
      "Finalize com explosão total.",
    ],
    beneficios: [
      "Consolidação de toda a evolução.",
      "Aumento significativo da performance.",
      "Sensação de conquista máxima.",
    ],
    miniDesafios: [
      "Finalizar circuito completo 2 vezes.",
      "Último minuto em intensidade máxima.",
    ],
  },
},
{
  title: "Ritmo de Campeão – Cadência Contínua",
  description: "Um treino para manter intensidade constante por longos períodos.",
  dayNumber: 41,
  xpReward: 130,
  details: {
    objetivo: "Melhorar consistência e controle de ritmo.",
    dicas: [
      "Evite picos de velocidade desnecessários.",
      "Respire profundamente pelo nariz.",
      "Mantenha postura firme.",
    ],
    beneficios: [
      "Aprimora resistência.",
      "Aumenta eficiência cardiovascular.",
      "Melhora consciência corporal.",
    ],
    miniDesafios: [
      "15 minutos sem diminuir intensidade.",
      "Acelerar nos últimos 90 segundos.",
    ],
  },
},
{
  title: "Força Absoluta – Inferno dos Membros Inferiores",
  description: "Um treino pesado para pernas e glúteos.",
  dayNumber: 42,
  xpReward: 160,
  details: {
    objetivo: "Desenvolver força e potência nas pernas.",
    dicas: [
      "Desça devagar nos agachamentos.",
      "Mantenha joelhos alinhados.",
      "Ative glúteos antes de cada repetição.",
    ],
    beneficios: [
      "Fortalece pernas e quadris.",
      "Melhora velocidade e estabilidade.",
      "Aumenta potência nos movimentos.",
    ],
    miniDesafios: [
      "80 agachamentos no total.",
      "30 avanços alternados.",
    ],
  },
},
{
  title: "HIIT Infernal – Ritmo Insano",
  description: "Sequência explosiva de alta intensidade.",
  dayNumber: 43,
  xpReward: 170,
  details: {
    objetivo: "Aumentar capacidade anaeróbica e velocidade de recuperação.",
    dicas: [
      "Ritmo forte nos intervalos.",
      "Não pare completamente nos descansos.",
      "Hidratação antes do treino é obrigatória.",
    ],
    beneficios: [
      "Queima alta de calorias.",
      "Aumenta explosão muscular.",
      "Melhora tempo de resposta física.",
    ],
    miniDesafios: [
      "8 rounds de 40s ON / 20s OFF.",
      "Último round no máximo possível.",
    ],
  },
},
{
  title: "Controle Avançado – Estabilidade Total",
  description: "Rotina focada em equilíbrio e coordenação avançada.",
  dayNumber: 44,
  xpReward: 120,
  details: {
    objetivo: "Refinar controle corporal e estabilidade articular.",
    dicas: [
      "Mantenha foco em um ponto fixo.",
      "Ative o core sempre.",
      "Use movimentos lentos e conscientes.",
    ],
    beneficios: [
      "Melhora equilíbrio geral.",
      "Previne lesões futuras.",
      "Aprimora propriocepção.",
    ],
    miniDesafios: [
      "1 minuto em equilíbrio com olhos fechados.",
      "20 repetições de elevação unilateral.",
    ],
  },
},
{
  title: "Power Upper – Força de Tronco Avançada",
  description: "Treino intenso para peito, costas e ombros.",
  dayNumber: 45,
  xpReward: 150,
  details: {
    objetivo: "Desenvolver força no tronco superior.",
    dicas: [
      "Use amplitude total nos exercícios.",
      "Evite travar cotovelos.",
      "Postura sempre neutra.",
    ],
    beneficios: [
      "Aumenta força de membros superiores.",
      "Melhora postura.",
      "Eleva resistência muscular.",
    ],
    miniDesafios: [
      "40 flexões no total.",
      "15 remadas isométricas ou estáticas.",
    ],
  },
},
{
  title: "Cardio Avançado – Corrida Progressiva",
  description: "Treino de ritmo crescente para condicionamento extremo.",
  dayNumber: 46,
  xpReward: 140,
  details: {
    objetivo: "Melhorar velocidade e resistência simultaneamente.",
    dicas: [
      "Comece mais leve.",
      "Aumente ritmo a cada 2 minutos.",
      "Respiração profunda e controlada.",
    ],
    beneficios: [
      "Aprimora fôlego.",
      "Aumenta velocidade final.",
      "Melhora capacidade pulmonar.",
    ],
    miniDesafios: [
      "10 minutos aumentando ritmo progressivamente.",
      "Sprint final de 20 segundos.",
    ],
  },
},
{
  title: "Mobilidade Ninja – Corpo Solto e Fluido",
  description: "Série avançada para soltar articulações e musculatura.",
  dayNumber: 47,
  xpReward: 110,
  details: {
    objetivo: "Aumentar flexibilidade e fluidez corporal.",
    dicas: [
      "Movimente-se suavemente.",
      "Expire durante alongamentos.",
      "Evite tensões desnecessárias.",
    ],
    beneficios: [
      "Melhora amplitude dos movimentos.",
      "Reduz dores musculares.",
      "Aumenta qualidade dos movimentos.",
    ],
    miniDesafios: [
      "Alongamento profundo de 5 minutos.",
      "Mobilidade torácica avançada por 2 minutos.",
    ],
  },
},
{
  title: "Desafio Mental – Superação Extrema",
  description: "Treino de repetição contínua para construir disciplina.",
  dayNumber: 48,
  xpReward: 180,
  details: {
    objetivo: "Treinar foco e resistência mental.",
    dicas: [
      "Divida o desafio em blocos.",
      "Respire quando o cansaço bater.",
      "Pense no objetivo, não no esforço.",
    ],
    beneficios: [
      "Melhora controle emocional.",
      "Aumenta resiliência.",
      "Eleva resistência física geral.",
    ],
    miniDesafios: [
      "120 agachamentos.",
      "60 flexões (pode dividir).",
    ],
  },
},
{
  title: "Deslocamento Ágil – Treino de Agilidade Avançada",
  description: "Sequência rápida com foco em deslocamento e reação.",
  dayNumber: 49,
  xpReward: 150,
  details: {
    objetivo: "Aprimorar mudanças de direção e velocidade.",
    dicas: [
      "Mantenha passos curtos.",
      "Baixe o centro de gravidade.",
      "Não arraste os pés.",
    ],
    beneficios: [
      "Aumenta agilidade.",
      "Melhora coordenação e reflexo.",
      "Eleva performance esportiva.",
    ],
    miniDesafios: [
      "3 rounds de ladder drill improvisado.",
      "20 deslocamentos laterais rápidos.",
    ],
  },
},
{
  title: "Força Suprema – Corpo de Titânio",
  description: "O desafio mais pesado deste novo ciclo de força.",
  dayNumber: 50,
  xpReward: 200,
  details: {
    objetivo: "Elevar força total ao limite.",
    dicas: [
      "Cuide da técnica primeiro.",
      "Não apresse movimentos pesados.",
      "Ative core antes de cada repetição.",
    ],
    beneficios: [
      "Fortalecimento intenso.",
      "Melhora controle corporal.",
      "Aumento de potência total.",
    ],
    miniDesafios: [
      "20 burpees explosivos.",
      "50 agachamentos com pausa de 2s.",
    ],
  },
},
{
  title: "Core de Aço – Intensidade Máxima",
  description: "Treino avançado focado em abdômen e lombar.",
  dayNumber: 51,
  xpReward: 160,
  details: {
    objetivo: "Fortalecer o core para estabilidade e performance.",
    dicas: [
      "Ative o abdômen em todos os movimentos.",
      "Evite curvar a lombar.",
      "Mantenha respiração constante.",
    ],
    beneficios: [
      "Melhora postura.",
      "Aumenta estabilidade central.",
      "Previne dores lombares.",
    ],
    miniDesafios: [
      "3 minutos totais de prancha (pode dividir).",
      "20 elevações de perna controladas.",
    ],
  },
},
{
  title: "Sprint Warrior – Explosão de Velocidade",
  description: "Corridas curtas e intensas para aumentar explosão.",
  dayNumber: 52,
  xpReward: 180,
  details: {
    objetivo: "Melhorar velocidade máxima e tempo de reação.",
    dicas: [
      "Incline o tronco levemente à frente.",
      "Use passada curta e rápida.",
      "Empurre o chão forte.",
    ],
    beneficios: [
      "Aumenta potência.",
      "Melhora tempo de resposta.",
      "Eleva condicionamento anaeróbico.",
    ],
    miniDesafios: [
      "8 sprints de 20 segundos.",
      "Descanso ativo de 40 segundos.",
    ],
  },
},
{
  title: "Treino Militar – Resistência Extrema",
  description: "Sequência inspirada em treinos de condicionamento militar.",
  dayNumber: 53,
  xpReward: 200,
  details: {
    objetivo: "Desenvolver capacidade física total.",
    dicas: [
      "Mantenha ritmo constante.",
      "Evite parar completamente.",
      "Controle a respiração até o final.",
    ],
    beneficios: [
      "Aumenta resistência total.",
      "Melhora disciplina mental.",
      "Eleva capacidade cardiorrespiratória.",
    ],
    miniDesafios: [
      "40 burpees.",
      "50 polichinelos rápidos.",
    ],
  },
},
{
  title: "Mobilidade Elite – Corpo Solto e Ágil",
  description: "Trabalho profundo de mobilidade com fluidez avançada.",
  dayNumber: 54,
  xpReward: 140,
  details: {
    objetivo: "Aumentar mobilidade e alongamento ativo.",
    dicas: [
      "Movimentos longos e suaves.",
      "Respire durante cada transição.",
      "Desbloqueie tensionamentos lentamente.",
    ],
    beneficios: [
      "Aumenta fluidez corporal.",
      "Reduz rigidez.",
      "Melhora performance atlética.",
    ],
    miniDesafios: [
      "Alongamento profundo de quadris por 2 minutos.",
      "Rotação torácica avançada por 1 minuto.",
    ],
  },
},
{
  title: "Cardio Monstro – Resistência de 30 minutos",
  description: "Um treino constante e prolongado para elevar o fôlego.",
  dayNumber: 55,
  xpReward: 190,
  details: {
    objetivo: "Desenvolver resistência cardiorrespiratória prolongada.",
    dicas: [
      "Comece leve e evolua.",
      "Não deixe a respiração descontrolar.",
      "Mantenha postura firme.",
    ],
    beneficios: [
      "Aumenta resistência aeróbica.",
      "Melhora circulação.",
      "Reduz fadiga ao longo do dia.",
    ],
    miniDesafios: [
      "30 minutos sem parar.",
      "Aumentar o ritmo nos últimos 5 minutos.",
    ],
  },
},
{
  title: "Força Bruta – Membros Superiores",
  description: "Treino forte para braços, peito, ombros e costas.",
  dayNumber: 56,
  xpReward: 150,
  details: {
    objetivo: "Desenvolver força avançada no tronco superior.",
    dicas: [
      "Mantenha escápulas ativadas.",
      "Controle a descida em cada exercício.",
      "Não esqueça de respirar.",
    ],
    beneficios: [
      "Aumenta força e densidade muscular.",
      "Melhora postura.",
      "Eleva capacidade funcional.",
    ],
    miniDesafios: [
      "50 flexões (pode dividir).",
      "2 minutos de prancha lateral (1min cada lado).",
    ],
  },
},
{
  title: "Ritmo Intenso – HIIT Avançado",
  description: "Intervalos curtos e agressivos para queima máxima.",
  dayNumber: 57,
  xpReward: 170,
  details: {
    objetivo: "Aumentar explosão, condicionamento e gasto calórico.",
    dicas: [
      "Dê 100% nos intervalos de esforço.",
      "Respire fundo no descanso.",
      "Use movimentos leves entre os blocos.",
    ],
    beneficios: [
      "Alta queima de gordura.",
      "Melhora explosão muscular.",
      "Eleva capacidade pulmonar.",
    ],
    miniDesafios: [
      "10 rounds de 20s ON / 20s OFF.",
      "Último round no máximo absoluto.",
    ],
  },
},
{
  title: "Controle Corporal Supremo",
  description: "Movimentos avançados de isometria e equilíbrio.",
  dayNumber: 58,
  xpReward: 160,
  details: {
    objetivo: "Aprimorar controle total do corpo.",
    dicas: [
      "Contraia o core desde o início.",
      "Evite compensações do quadril.",
      "Execute lentamente.",
    ],
    beneficios: [
      "Melhora estabilidade total.",
      "Aumenta coordenação fina.",
      "Previne lesões em treinos intensos.",
    ],
    miniDesafios: [
      "3 pranchas de 1 min.",
      "1 minuto de agachamento isométrico.",
    ],
  },
},
{
  title: "Agilidade Avançada – Resposta Rápida",
  description: "Treino com foco em velocidade de reação e movimentos ágeis.",
  dayNumber: 59,
  xpReward: 150,
  details: {
    objetivo: "Aumentar velocidade lateral e coordenação.",
    dicas: [
      "Passos curtos e rápidos.",
      "Foque em leveza nos pés.",
      "Evite cruzar as pernas.",
    ],
    beneficios: [
      "Melhora reflexo.",
      "Aumenta agilidade.",
      "Eleva tempo de resposta em esportes.",
    ],
    miniDesafios: [
      "30 segundos de deslocamento lateral rápido.",
      "20 trocas de direção explosivas.",
    ],
  },
},
{
  title: "Desafio Supremo – Força e Cardio Combinados",
  description: "Treino híbrido de resistência e força extrema.",
  dayNumber: 60,
  xpReward: 230,
  details: {
    objetivo: "Testar força, resistência e capacidade mental ao mesmo tempo.",
    dicas: [
      "Divida os blocos mentalmente.",
      "Não quebre ritmo sem necessidade.",
      "Hidratação antes e depois é crucial.",
    ],
    beneficios: [
      "Aumenta condicionamento geral.",
      "Eleva força corporal completa.",
      "Fortalece disciplina e foco.",
    ],
    miniDesafios: [
      "100 agachamentos.",
      "20 burpees.",
    ],
  },
}
    ],
    skipDuplicates: true,
  });

  console.log("✅ 12 missões criadas com sucesso!");
}

main()
  .catch((e) => {
    console.error("❌ Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
