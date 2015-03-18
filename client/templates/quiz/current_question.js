Template.currentQuestion.helpers({
  question: function() {
    // console.log(Quiz.getQuestion());
    return Quiz.getQuestion();
  },

  currentPosition: function() {
    return Quiz.currentPosition();
  },

  // outOfQuestions: function() {
  //   return true;
  // }
  // currentQuestionNumber: function() {
  //   return (Quiz.questionIndex() + " / " + Quiz.totalQuestions());
  // }

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
    Quiz.incrementQuestion();


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
    Quiz.incrementQuestion();

    return Quiz.incrementCorrect(result);
  },

  "click button": function(e) {
    e.preventDefault();
    console.log('hi');
    $('#final-modal').modal('show');
  },

  "click #login-buttons-logout": function(e) {
    e.preventDefault();
    Router.go('/languages');
  }
});

//  1) get an array of 10 question objects at random from main quiz collection
//  2) ->> currentQuestion
//  3) # in the array
//  4) correctAnswers ++
//  5) Incorrect = wrongAnswers.push(currentQuestion)
