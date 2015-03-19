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

// Template.currentQuestion.rendered({
//   $('')
// })
Template.currentQuestion.events({
  "click .submit": function(e) {
    e.preventDefault();
    var response = e.target.value;
    var result = Quiz.isCorrect(response);
    if(result) {
      $('.correct-flash').fadeTo(500, 1).fadeTo(2500, 0);
      if(Quiz.questionsRemain()){
        Meteor.setTimeout(function(){
          Quiz.incrementQuestion();
          return Quiz.incrementCorrect(result);
        }, 750);
      } else {
        $('#final-modal').modal('show');
      }
    } else if(result === false){
      $('.incorrect-flash').fadeTo(500, 1).fadeTo(2500, 0);
      if(Quiz.questionsRemain()){
        Meteor.setTimeout(function(){
        Quiz.incrementQuestion();
        return Quiz.incrementCorrect(result);
        }, 750);
      } else {
        $('#final-modal').modal('show');
      }
    }
  },

  "submit .fitb-form": function(e) {
    e.preventDefault();
    var response = $('#fitb-answer').val().trim();
    var result = Quiz.isCorrect(response);
    if(result) {
      $('.correct-flash').fadeTo(500, 1).fadeTo(2500, 0);
      if(Quiz.questionsRemain()){
        Meteor.setTimeout(function(){
        Quiz.incrementQuestion();
        return Quiz.incrementCorrect(result);
        }, 750);
      } else {
        $('#final-modal').modal('show');
      }
    } else if(result === false){
      $('.incorrect-flash').fadeTo(500, 1).fadeTo(2500, 0);
      if(Quiz.questionsRemain()){
        Meteor.setTimeout(function(){
        Quiz.incrementQuestion();
        return Quiz.incrementCorrect(result);
        }, 750);
      } else {
        $('#final-modal').modal('show');
    }
    $('#fitb-answer').val('');
  }
}

  // "click button": function(e) {
  //   e.preventDefault();
  //   console.log('hi');
  //   $('#final-modal').modal('show');
  // }
});

