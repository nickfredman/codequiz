Template.currentQuestion.helpers({
  question: function() {
    return Quiz.getQuestion();
  }
});

Template.currentQuestion.events({
  "click .submit": function(e) {
    e.preventDefault();
    var response = e.target.value;
    var result = Quiz.isCorrect(response);
    console.log(result);
    Quiz.incrementQuestion();
    
    return result;
  },

  "submit .fitb-form": function(e) {
    e.preventDefault();
    var response = $('#fitb-answer').val().trim();
    var result = Quiz.isCorrect(response);
    console.log(result);
    Quiz.incrementQuestion();

    return Quiz.isCorrect(response);
  }
});

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
    var nextIndex = (this.questionIndex() + 1);

    if(this.questionsRemain()) {
      Session.set("questionIndex", nextIndex);
    }
  },

  questionsRemain: function() {
    return (this.questionIndex() < (this.currentQuiz().length - 1));
  },

  isCorrect: function(response) {
    correctAnswer = this.getQuestion().correctAnswer;
    return (response === correctAnswer);
  }
}

//  1) get an array of 10 question objects at random from main quiz collection
//  2) ->> currentQuestion
//  3) # in the array
//  4) correctAnswers ++
//  5) Incorrect = wrongAnswers.push(currentQuestion)
