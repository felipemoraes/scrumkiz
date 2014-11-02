var config = require('./config'),
  knex = require('knex')(config.knex_options),
  Promise = require('knex/lib/promise');

var startq = {
  'question': 'start',
  'answers': JSON.stringify(['start']),
  'answer_index': 1,
  'show': true
};

var qs = [
{
  'question': "Quando e por quê deve-se fazer uma reunião de retrospectiva?1",
  'answers': ["Antes de entregar o software final ao cliente, porque as lições aprendidas podem ser usadas nos próximos projetos.",
   "Ao final de cada Sprint, para que problemas sejam solucionados para a próxima",
   "Quando o ScrumMaster decidir, pois ele deve primar pelo bom andamento do projeto.",
   "Somente quando os backlogs de uma Sprint não são cumpridos, pois deve-se então demitir alguém do Time de Desenvolvimento"],
  'answer_index': 2
}, {
  'question': "Quando e por quê deve-se fazer uma reunião de retrospectiva?2",
  'answers': ["Antes de entregar o software final ao cliente, porque as lições aprendidas podem ser usadas nos próximos projetos.",
   "Ao final de cada Sprint, para que problemas sejam solucionados para a próxima",
   "Quando o ScrumMaster decidir, pois ele deve primar pelo bom andamento do projeto.",
   "Somente quando os backlogs de uma Sprint não são cumpridos, pois deve-se então demitir alguém do Time de Desenvolvimento"],
  'answer_index': 2
}, {
  'question': "Quando e por quê deve-se fazer uma reunião de retrospectiva?3",
  'answers': ["Antes de entregar o software final ao cliente, porque as lições aprendidas podem ser usadas nos próximos projetos.",
   "Ao final de cada Sprint, para que problemas sejam solucionados para a próxima",
   "Quando o ScrumMaster decidir, pois ele deve primar pelo bom andamento do projeto.",
   "Somente quando os backlogs de uma Sprint não são cumpridos, pois deve-se então demitir alguém do Time de Desenvolvimento"],
  'answer_index': 2
}, {
  'question': "Quando e por quê deve-se fazer uma reunião de retrospectiva?4",
  'answers': ["Antes de entregar o software final ao cliente, porque as lições aprendidas podem ser usadas nos próximos projetos.",
   "Ao final de cada Sprint, para que problemas sejam solucionados para a próxima",
   "Quando o ScrumMaster decidir, pois ele deve primar pelo bom andamento do projeto.",
   "Somente quando os backlogs de uma Sprint não são cumpridos, pois deve-se então demitir alguém do Time de Desenvolvimento"],
  'answer_index': 2
}
];

knex('questions').del().then(function() {
  return knex('questions').insert(startq);
}).then(function() {
  return Promise.map(qs, function(question) {
    console.log("Creating ", question.question);
    question.answers = JSON.stringify(question.answers);
    return knex('questions').insert(question);
  });
}).then(function() {
  knex('questions').insert({
    question: 'end',
    answers: '["end"]',
    answer_index: 1
  }).then(function() {
    process.exit(0);
  });
});
