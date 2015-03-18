Router.configure({
  layoutTemplate: 'applicationLayout'
});

Router.route('/', function () {
  this.render('bodyContent');
});

Router.route('/languages', function(){
  this.render('languages');
});

Router.route('/terms', function(){
  this.render('terms');
});

Router.route('/privacy', function(){
  this.render('privacy');
});

Router.route('/pricing', function(){
  this.render('pricing');
});

Router.route('/quiz', function(){
  this.render('quiz');

});


// var mustBeSignedIn = function(pause) {
//   if (!(Meteor.user() || Meteor.loggingIn())) {
//     Router.go('languages');
//     pause();
//   }
// };

// Router.onBeforeAction(mustBeSignedIn, {only: ['quiz']});


// QuizController = RouteController.extend({
//   action: function() {
//     this.state.set('language', this.params.language);
//     this.state.set('level', this.params.level);
//     this.render();
//   }
// });



  // var language = this.params.language;
  // var level = this.params.level;
  // this.render('quiz');


// Router.map(function() {
//   this.route('/quiz', {
//     path: '/quiz/:language/:level',
//     template: 'quiz',
//     data: function(){
//       var language = this.params.language;
//       var level = this.params.level;

//       return { langauge: language, level: level };
//     }
//   });
// });