Session.set("numberCorrect", 0);
Session.set("numberIncorrect", 0);

Quiz = {
  getQuestion: function() {
    console.log(this.currentQuiz());
    return this.currentQuiz()[this.questionIndex()];
  },

  totalQuestions: function() {
    return 10;
  },

  currentQuiz: function() {
    (Session.get("currentQuiz") || Session.set("currentQuiz", this.getQuiz()));

    return Session.get("currentQuiz");
  },


// update to accept lang/level params
// also need to change the attribute name in the collection
  getQuiz: function() {
    //
    //need to make this dynamic!!
    //
    var scope = Questions.find({language: "javascript", difficulty: "easy"});
    var questions = scope.fetch();

    return this.getRandomSubset(questions, Session.get("totalQuizQuestions"));
  },

  getRandomSubset: function(set, count) {
    return _.first(_.shuffle(set), count);
  },

  questionIndex: function() {
    return (Session.get("questionIndex") || 0);
  },

  incrementQuestion: function() {
    if(this.questionsRemain()) {
      Session.set("questionIndex", this.nextIndex());
    }
  },

  nextIndex: function() {
    return (this.questionIndex() + 1);
  },

  questionsRemain: function() {
    return (this.questionIndex() < (this.currentQuiz().length - 1));
  },

  isCorrect: function(response) {
    var correctAnswer = this.getQuestion().correctAnswer;
    return (response === correctAnswer);
  },

  incrementCorrect: function(result) {
    if(result){
      Session.set("numberCorrect", (Session.get("numberCorrect")+1));
    } else {
      Session.set("numberIncorrect", (Session.get("numberIncorrect")+1));
    }
  },

  currentPosition: function() {
    var questionNumber = this.questionIndex() + 1;
    return (questionNumber + " / " + this.totalQuestions());
  }
};
