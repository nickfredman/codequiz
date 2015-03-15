Template.currentQuestion.helpers({
  question: function() {
    return Questions.find({language: "javascript", difficulty: "easy"}, {limit: 1}).fetch()[0];
  }
})