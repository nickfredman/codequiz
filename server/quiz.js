Meteor.methods({
  getQuiz: function() {
    questions = Questions.find({language: "javascript", difficulty: "easy"}).fetch();
    console.log( _.first(_.shuffle(questions), 10) );
    return _.first(_.shuffle(questions, 10));
  }
});
