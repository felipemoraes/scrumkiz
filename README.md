# Scrumkiz

Esta é uma aplicação implementada durante a disciplina de Engenharia de Software da Universidade Federal de Minas Gerais. É um jogo de perguntas e perguntas, com um dos temas mais populares do desenvolvimento de software, a metodologia Scrum. O aplicativo móvel em si é um aplicativo AngularJS híbrido composto de HTML, CSS e Javascript. O lado do The
servidor é implementado como aplicação Express Node.js rodando por cima de uma banco de dados Postgres.

## Como jogar

Um conjunto de jogadores abrem o aplicativo em seus smartphones através dos browser e se registram para jogar. Durante o jogo, as questões são apresentadas para cada jogar rodando o aplicativo e seus pontos são ganhados pelas respostas corretas das questões. Como os jogadores ganham pontos em tempo real, um ranking está disponível para cada jogador.


Notificação de novas questões e respostas são transmistidos via Websocket para o aplicativo usando a SocketIO library.

**Screenshot do jogo**


**Screenshot da tela de Admin**




# Como fazer deploy do app

O aplicativo pode ser lançado no Heroku e distribuído aos dispositivos moveis através do web browser


# Licença

Esse código está disponível sobre a licença do MIT.

