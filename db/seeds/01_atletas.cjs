/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  const trainingData = [
    {
      semana: 1,
      segunda_aq: "Corrida leve por 10 minutos",
      segunda_main: "Agachamentos (3 séries de 10 repetições), Supino (3 séries de 8 repetições), Levantamento Terra (3 séries de 6 repetições)",
      segunda_esf: "Alongamentos para pernas e core (15 minutos)",
      terca_aq: "Natação leve por 20 minutos",
      terca_main: "Treino de HIIT (10 minutos de sprints alternados com 2 minutos de descanso)",
      terca_esf: "Ioga restaurativa (30 minutos)",
      quarta_aq: "Ciclismo indoor por 30 minutos",
      quarta_main: "Treino de força para membros inferiores (foco em agachamentos e leg press)",
      quarta_esf: "Alongamentos dinâmicos (10 minutos)",
      quinta_aq: "Descanso",
      quinta_main: "Treino de força para membros superiores (foco em supino e remada)",
      quinta_esf: "Alongamentos estáticos (10 minutos)",
      sexta_aq: "Yoga vinyasa (60 minutos)",
      sexta_main: "Treino de boxe (30 minutos)",
      sexta_esf: "Massagem esportiva (30 minutos)",
      sabado_aq: "Caminhada leve na praia (30 minutos)",
      sabado_main: "Treino funcional com foco em core e estabilidade",
      sabado_esf: "Alongamentos para todo o corpo (20 minutos)",
      domingo_aq: "Descanso ativo (natação leve ou yoga)",
      domingo_main: "Treino de força leve (foco em manutenção)",
      domingo_esf: "Preparação para a semana seguinte (planejamento, alongamentos leves)"
    },
    {
      semana: 2,
      segunda_aq: "Aquecimento com corda e polichinelos (5 minutos)",
      segunda_main: "Treino de força para membros inferiores (foco em agachamentos e leg press)",
      segunda_esf: "Alongamentos dinâmicos e estáticos para pernas (10 minutos)",
      terca_aq: "Natação em ritmo moderado por 30 minutos",
      terca_main: "Treino de HIIT com foco em sprints curtos e intensos",
      terca_esf: "Yoga restaurativa com foco em relaxamento e recuperação",
      quarta_aq: "Ciclismo indoor por 45 minutos com variação de intensidade",
      quarta_main: "Treino de força para membros superiores (foco em supino e remada)",
      quarta_esf: "Alongamentos dinâmicos e estáticos para braços e ombros (10 minutos)",
      quinta_aq: "Descanso ativo com caminhada leve ou alongamentos",
      quinta_main: "Treino funcional com foco em core e estabilidade",
      quinta_esf: "Alongamentos para todo o corpo (20 minutos)",
      sexta_aq: "Yoga vinyasa com foco em flexibilidade e força",
      sexta_main: "Treino de boxe com foco em técnica e combinações",
      sexta_esf: "Massagem esportiva com foco em áreas de tensão muscular",
      sabado_aq: "Caminhada leve na praia com foco em respiração e consciência corporal",
      sabado_main: "Treino de força leve para manutenção muscular",
      sabado_esf: "Alongamentos para todo o corpo com foco em flexibilidade",
      domingo_aq: "Descanso ativo com natação leve ou yoga",
      domingo_main: "Treino de força leve para manutenção muscular",
      domingo_esf: "Preparação para a semana seguinte (planejamento, alongamentos leves)"
    }
  ];

  const zonesData = [
    {
      z1: "06:40",
      z2: "06:40",
      z3: "06:40",
      z4: "06:40"
    }
  ]
  

  // Deletes ALL existing entries
  await knex('atletas_table').del()
  await knex('atletas_table').insert([
    {
      username: 'Isaac', 
      goal: 'Ganhar Massa Moscular Perniana',
      zones: JSON.stringify(zonesData),
      training: JSON.stringify(trainingData),
    }
  ]);
};
