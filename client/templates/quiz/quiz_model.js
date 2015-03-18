Session.set("numberCorrect", 0);
Session.set("numberIncorrect", 0);

Quiz = {
  initializeQuiz: function(language, level) {
    Session.set("currentQuiz", this.buildQuiz(language, level));
  },

  buildQuiz: function(language, level) {
    var language = language;
    var level = level;
    var questionsCount = 0;

    switch (level) {
      case "1":
        questionsCount = 10;
      case "2":
        questionsCount = 15;
      case "3":
        questionsCount = 20;
    }

    var scope = Questions.find({language: language, difficulty: level}).fetch();
    var questions = this.getRandomSubset(questions, questionsCount);

    var quiz = {
      language: language,
      level: level,
      questionsCount: questionsCount,
      questions: questions
    }

    console.log(quiz);
    return quiz;
  },

  getQuestion: function() {
    return this.currentQuiz()[this.questionIndex()];
  },

  totalQuestions: function() {
    return Session.get("totalQuizQuestions");
  },

  currentQuiz: function() {
    return Session.get("currentQuiz");
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
