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