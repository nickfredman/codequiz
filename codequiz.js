// Template code
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
// Quiz content, may need to completely re-write
//     // Quiz Implimentation
    //passed variables: diff currentLang
// var totalQuest = 0;
// if (diff === 'easy') {
//     totalQuest = 10;
// }   else if ( diff === 'medium') {
//     totalQuest = 15;
// }   else if (diff === 'hard') {
//     totalQuest = 20;
// }

// var questionList, questionCounter, currentAnswer, mcAnswers, correctQuestions;


// var populate = function(qtype){
//     $('#question-number').text(questionCounter + ' / ' + totalQuest);
//     console.log(questionCounter);
//     if(qtype === "mc"){
//         mcAnswers = questionList[questionCounter-1].possibleAnswers.split(',');
//         console.log(mcAnswers);
//         $('.mc-question-text').find('p').html(questionList[questionCounter-1].question);
//         $('#answer1').html(mcAnswers[0]);
//         $('#answer2').html(mcAnswers[1]);
//         $('#answer3').html(mcAnswers[2]);
//         $('#answer4').html(mcAnswers[3]);
//     }
//     else if(qtype === "fitb"){
//         $('#fitb-answer').val('');
//         $('.fitb-question-text').find('p').html(questionList[questionCounter-1].question);
//     }
// };

// var checker = function() {
//     questionCounter ++;
//     if(questionList[questionCounter-1].type === "mc"){
//         $('.current-question-fitb').addClass('hidden');
//         $('.current-question-mc').removeClass('hidden');
//         populate("mc");
//     } else if(questionList[questionCounter-1].type === "fitb"){
//         $('.current-question-mc').addClass('hidden');
//         $('.current-question-fitb').removeClass('hidden');
//         populate("fitb");
//     }
// };

// var finisher = function() {
//     $('#final-modal').modal('show');
//     $('#correct').text(correctQuestions + " ");
//     $('#total').text(totalQuest + " ");
// };


// $(document).on('ready', function() {
//     totalQuest = 10;
//     questionCounter = 0;
//     correctQuestions = 0;
//     questionList = _.first(_.shuffle(easyQuestions), totalQuest);
//     checker();
//     $(document).on('click', '.mc-btn', function(){
//         if($(this).text() === questionList[questionCounter-1].answer){
//             correctQuestions ++;
//             $('#h4-label').text('Correct!');
//             $('#next-btn').addClass('btn-good');
//             $('#quiz-modal').modal('show');
//             $(document).on('click', '#next-btn', function(){
//                 $('#quiz-modal').modal('hide');
//                 $('#next-btn').removeClass('btn-good');
//                 if (questionCounter > totalQuest){
//                     return finisher();
//                 }
//             });
//         } else {
//             $('#h4-label').text('Wrong Answer!');
//             $('#next-btn').addClass('btn-bad');
//             $('#quiz-modal').modal('show');
//             $(document).on('click', '#next-btn', function(){
//                 $('#next-btn').removeClass('btn-bad');
//                 $('#quiz-modal').modal('hide');
//                 if (questionCounter > totalQuest){
//                     return finisher();
//                 }
//             });
//         }
//           checker();
//       });

//     $(document).on('click', '.fitb-btn', function(e){
//         e.preventDefault();
//         if($('#fitb-answer').val() === questionList[questionCounter-1].answer){
//             correctQuestions ++;
//             $('#h4-label').text('Correct!');
//             $('#next-btn').addClass('btn-good');
//             $('#quiz-modal').modal('show');
//             $(document).on('click', '#next-btn', function(){
//                 $('#quiz-modal').modal('hide');
//                 $('#next-btn').removeClass('btn-good');
//                 if (questionCounter > totalQuest){
//                     return finisher();
//                 }
//             });
//         } else {
//             $('#h4-label').text('Wrong Answer!');
//             $('#next-btn').addClass('btn-bad');
//             $('#quiz-modal').modal('show');
//             $(document).on('click', '#next-btn', function(){
//                 $('#next-btn').removeClass('btn-bad');
//                 $('#quiz-modal').modal('hide');
//                 if (questionCounter > totalQuest){
//                     return finisher();
//                 }
//             });
//         }
//           checker();
//     });
// });




// MAIN.JS FILE, need to refactor from jQuery
// var langs = ["javascript", "jquery"];
// var diff, currentLang;


// $(document).on('ready', function() {
//     $(document).on('click', '.lang-box', function() {
//         $('#modal').modal('show');
//         currentLang = $(this).find('.language').text();
//         console.log(currentLang);
//     });
//     $(document).on('click', '.easy-mode', function() {
//         diff = 'easy';
//     });
//     $(document).on('click', '.medium-mode', function() {
//         diff = 'medium';
//     });
//     $(document).on('click', '.hard-mode', function() {
//         diff = 'hard';
//     });
//     $(document).on('click', '.signup', function(){
//         $('#signup').modal('show');
//     });
// });


// QUESTIONS TO ADD TO DB, JS -> EASY
// var easyQuestions, mediumQuestions, hardQuestions = [];

// easyQuestions = [{
//     question: "Which method creates an &lt;a&gt; HTML element that is used as a hypertext target?",
//     answer: "anchor",
//     type: "fitb"
// },{
//     question: "Which method returns the specified character from a string?",
//     possibleAnswers: "bind,concat,charAt,slice",
//     answer: "charAt",
//     type: "mc"
// },{
//     question: "How would you combine two or <br>more strings without using + ?",
//     answer: "concat",
//     type: "fitb"
// },{
//     question: "Which method creates a new array with all elements that pass the test implemented by the provided function?",
//     possibleAnswers: "map,filter,for,join",
//     answer: "filter",
//     type: "mc"
// },{
//     question: "How do you return the first index at which a given element can be found in an array, or -1 if it is not present?",
//     possibleAnswers: "indexOf,index,charAt,location",
//     answer: "indexOf",
//     type: "mc"
// },{
//     question: "<code>var sampleArray = ['apple', 'banana', 'cherry'];\nvar finalArray = sampleArray[0] + sampleArray[1] + sampleArray[2]; </code> <br><br>What method would better accomplish the above?",
//     answer: "join",
//     type: "fitb"
// },{
//     question: "Which method removes the last element from an array and returns that element?",
//     possibleAnswers: "push,shove,shift,pop",
//     answer: "pop",
//     type: "mc"
// },{
//     question: "How would you make the first element of an array become the last and the last element of an array become the first?",
//     answer: "reverse",
//     type: "fitb"
// },{
//     question: "Which method extracts a section of a string and returns a new string?",
//     possibleAnswers: "splice,split,slice,shift",
//     answer: "slice",
//     type: "mc"
// },{
//     question: "Which method returns a string that might 'LOOK LIKE THIS?'",
//     answer: "toUpperCase",
//     type: "fitb"
// }];