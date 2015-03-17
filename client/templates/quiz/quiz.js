// Quiz = {
//   getCurrentQuestion: function() {
//     var question = this.currentQuiz()[this.currentQuestionIndex()];
// 
//     // do this on submitting an answer
//     // this.incrementCurrentQuestion();
//   
//     return question;
//   },
// 
//   currentQuestionIndex: function() {
//     return (Session.get("currentQuestionIndex") || 0);
//   },
//   
//   currentQuiz: function() {
//     // move this logic to a meteor method on the server (e.g. getQuiz)
//     var result = {};
// 
//     if(Session.get("currentQuiz")) {
//       result = Session.get("currentQuiz");
//     } else {
//       result = this.getRandomSubset(this.getQuestions(), 10);
//       Session.set("currentQuiz", result);
//     }
// 
//     return result;
//   },
//   
//   getQuestions: function() {
//     // move this to a meteor method on the server
//     return Questions.find({language: "javascript", difficulty: "easy"}).fetch();
//   },
//   
//   getRandomSubset: function(set, count) {
//     return _.first(_.shuffle(set), count);
//   },
//   
// //  incrementCurrentQuestion: function() {
// //    if(this.questionsRemain) {
// //      Session.set("currentQuestion", this.nextQuestionIndex);
// //    }
// //  },
//   
//   questionsRemain: function() {
//     Session.get("currentQuestion") <= (this.currentQuiz.length - 1)
//   },
//   
//   nextQuestionIndex: function() {
//     Session.get("currentQuestion") + 1
//   }
// }

  // beginQuiz: function() {
  //   Session.set("currentQuestion", 0);
  // },

Template.currentQuestion.helpers({
  question: function() {
    return Quiz.getCurrentQuestion();
    
    return Session.get("currentQuestion");
  }
});

Quiz = {
  getCurrentQuestion: function() {
    Session.set("currentQuestion", this.currentQuiz()[this.currentQuestionIndex()]);
    return Session.get("currentQuestion");
  },

  currentQuestionIndex: function() {
    return (Session.get("currentQuestionIndex") || 0);
  },

  currentQuiz: function() {
    Session.get("currentQuiz") || Session.set("currentQuiz", [{ 
      text: "Which method returns a string that might 'LOOK LIKE THIS?'",
      correctAnswer: "toUpperCase",
      isMultipleChoice: false,
      difficulty: "easy",
      language: "javascript"
    }, {
      text: "Which method extracts a section of a string and returns a new string?",
      possibleAnswers: ["splice", "split", "slice", "shift"],
      correctAnswer: "slice",
      isMultipleChoice: true,
      difficulty: "easy",
      language: "javascript"
    }]);
    
    return Session.get("currentQuiz");   
  },

  isCorrect: function(response) {
    correctAnswer = Session.get("currentQuestion").correctAnswer;
    return (response === correctAnswer);
  },

  incrementCurrentQuestion: function() {
    this.incrementCurrentQuestionIndex();
    Session.set("currentQuestion", this.currentQuiz()[this.currentQuestionIndex()]);
  },

  currentQuestionIndex: function() {
    return (Session.get("currentQuestionIndex") || 0);
  },

  incrementCurrentQuestionIndex: function() {
    var nextIndex = (this.currentQuestionIndex() + 1);

    if(this.questionsRemain()) {
      Session.set("currentQuestionIndex", nextIndex);
    }
  },

  questionsRemain: function() {
    return (this.currentQuestionIndex() < (this.currentQuiz().length - 1));
  }
}

Template.currentQuestion.events({
  "click .submit": function(e) {
    e.preventDefault();
    var response = e.target.value;
    var result = Quiz.isCorrect(response);
    console.log(result);
    Quiz.incrementCurrentQuestion();
    
    return result;
  },

  "submit .fitb-form": function(e) {
    e.preventDefault();
    var response = $('#fitb-answer').val().trim();
    var result = Quiz.isCorrect(response);
    console.log(result);
    Quiz.incrementCurrentQuestion();

    return Quiz.isCorrect(response);
  }
});

// Template.quiz.quizQuestions = function() {
//   var questions = Questions.find({language: "javascript", difficulty: "easy"}).fetch();

//   return _.first(_.shuffle(questions), 10);
// };

// Session.set("currentQuestion", 1);

// Template.currentQuestion.helpers({
// })

// Template.currentQuestion.events({
//   "click submit": function(e){
//     e.preventDefault();
//     alert("this is the right submit");
// // check answer
//     Session.set("currentQuestion", Session.get("currentQuestion") + 1);
//   }
// });

//entire quiz collection
//  1) get an array of 10 question objects at random from main quiz collection
//  2) ->> currentQuestion
//  3) # in the array
//  4) correctAnswers ++
//  5) Incorrect = wrongAnswers.push(currentQuestion)
//
// var quiz = {
//  user_id:
//  questions: X number of questions randomly chosen from the Collection
//  answers: for each of the above questions
// }
