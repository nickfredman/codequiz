Meteor.methods({
  getQuiz: function() {
    questions = Questions.find({
      language: Sessiong.get("language"),
      difficulty: Session.get("level").fetch()
    });
    console.log("hi", questions);
    return _.first(_.shuffle(questions, Session.get("totalQuizQuestions")));
  }
});
