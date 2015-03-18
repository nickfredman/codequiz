Template.quiz.helpers({
  language: function() {
    return Session.get("language");
  },

  level: function() {
    return Session.get("level");
  },

  questionNumber: function() {
    return Session.get("questionIndex");
  },

  correctAnswers: function() {
    return Session.get("numberCorrect");
  },

  incorrectAnswers: function() {
    return Session.get("numberIncorrect");
  },

  hasCorrectAnswers: function() {
    return Session.get("numberCorrect") > 0;
  },

  hasIncorrectAnswers: function() {
    return Session.get("numberIncorrect") > 0;
  },

  totalQuestions: function() {
    return Session.get("totalQuizQuestions");
  }
});

Template.quiz.events({
  "click #nextQuiz": function(e) {
    e.preventDefault();
    Router.go('/languages');
  },

  "click #retake": function(e) {
    e.preventDefault();
    console.log('it worked');
    Quiz.getQuiz();
    $('#final-modal').modal('hide');
    Router.render('/quiz');
  }
});

