angular.module('scrumkizApp.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('QuizCtrl', function($scope, Questions) {
  $scope.questions = Questions.all();
})

.controller('SettingsCtrl', function($scope) {
})

.controller('RankingCtrl', function($scope) {
});
