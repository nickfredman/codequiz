Session.set("numberCorrect", 0);
Session.set("numberIncorrect", 0);


Quiz = {
  //ok
  getQuestion: function() {
    return this.currentQuiz()[this.questionIndex()];
  },

  totalQuestions: function() {
    return Session.get("totalQuizQuestions");
  },

  currentQuiz: function() {
    (Session.get("currentQuiz") || Session.set("currentQuiz", this.getQuiz()));
    return Session.get("currentQuiz");
  },

  // totalQuestions: function() {
  //   return this.currentQuiz.length;
  // },

  // currentQuiz: function() {
  //   return this.getOrInitializeQuiz();
  // },

  // getOrInitializeQuiz: function() {
  //   if( !this.isQuizInitialized() ) {
  //     this.initializeQuiz();
  //   }

  //   return Session.get("currentQuiz");
  // },

  // isQuizInitialized: function() {
  //   var quiz = Session.get("currentQuiz");
  //   return (Array.isArray(quiz) && quiz.length > 0);
  // },

  // initializeQuiz: function() {
  //   Session.set("currentQuiz", this.getQuiz());
  // },

  getQuiz: function() {

    var scope = Questions.find({
      language: Session.get("language").toLowerCase(),
      difficulty: Session.get("level")
    });
    // console.log(scope);
    var questions = scope.fetch();
// console.log(this.getRandomSubset(questions, Session.get("totalQuizQuestions")));
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
    return (questionNumber + " / " + Session.get("totalQuizQuestions"));
  }
};
