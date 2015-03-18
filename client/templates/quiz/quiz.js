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
  }
});

Template.currentQuestion.helpers({
  question: function() {
    return Quiz.getQuestion();
  },

  currentQuestionNumber: function() {
    return (Quiz.questionIndex() + " / " + Quiz.totalQuestions());
  }

});

Template.currentQuestion.events({
  "click .submit": function(e) {
    e.preventDefault();
    var response = e.target.value;
    var result = Quiz.isCorrect(response);
    if(result) {
      $('.correct-flash').fadeTo(1500, 1).fadeTo(1500, 0);
    } else if(result === false){
      $('.incorrect-flash').fadeTo(1500, 1).fadeTo(1500, 0);
    }
    // console.log(result);
    Quiz.incrementQuestion;
    // $('correct-flash').toggleClass('flash-active');
    // $('incorrect-flash').toggleClass('flash-active');

    return Quiz.incrementCorrect(result);
  },

  "submit .fitb-form": function(e) {
    e.preventDefault();
    var response = $('#fitb-answer').val().trim();
    var result = Quiz.isCorrect(response);
    if(result) {
      $('.correct-flash').fadeTo(1500, 1).fadeTo(1500, 0);
    } else if(result === false){
      $('.incorrect-flash').fadeTo(1500, 1).fadeTo(1500, 0);
    }
    // console.log(result);
    Quiz.incrementQuestion;
    // $('correct-flash').toggleClass('flash-active');
    // $('incorrect-flash').toggleClass('flash-active');
    return Quiz.incrementCorrect(result);
  }
});

//  1) get an array of 10 question objects at random from main quiz collection
//  2) ->> currentQuestion
//  3) # in the array
//  4) correctAnswers ++
//  5) Incorrect = wrongAnswers.push(currentQuestion)
