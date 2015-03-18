Session.set("numberCorrect", 0);
Session.set("numberIncorrect", 0);

Quiz = {
  getQuestion: function() {
    return this.currentQuiz()[this.questionIndex()];
  },

  currentQuiz: function() {
    return this.getOrInitializeQuiz();
  },

  getOrInitializeQuiz: function() {
    if( !this.isQuizInitialized() ) {
      this.initializeQuiz();
    }

    return Session.get("currentQuiz");
  },

  isQuizInitialized: function() {
    var quiz = Session.get("currentQuiz")
    return (Array.isArray(quiz) && quiz.length > 0);
  },

  initializeQuiz: function() {
    Session.set("currentQuiz", this.getQuiz());
  },

  getQuiz: function() {
    var scope = Questions.find({language: "javascript", difficulty: "easy"});
    var questions = scope.fetch();

    return this.getRandomSubset(questions, 10);
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
  }
};
