angular.module('scrumkizApp.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Questions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data


  var questions = [
  { id: 0, body: 'O que melhor descreve a Sprint Review?',
    options : {A: 'E uma reuniao utilizada para construir o espirito de equipe.',
         B: 'E uma reuniao para que o Product Owner faca uma revisao das atividades \
        do Time de Desenvolvimento durante o Sprint.',
      C: 'E uma reuniao para dar aos clientes e demais partes interessadas uma \
        oportunidade de inspecionar o que foi feito durante o Sprint e dar feedback.',
      D: 'E uma reuniao para que o Time de Desenvolvimento faca uma revisao dos seus \
      processos durante o Sprint.'
  }
    }
  ];
  return {
    all: function() {
      return questions;
    },
    get: function(questionId) {
      // Simple index lookup
      return questions[questionId];
    }
  }
});
