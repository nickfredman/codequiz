Router.configure({
  layoutTemplate: 'applicationLayout'
});

Router.route('/', function () {
  this.render('bodyContent');
});

// Router.route('/languages', function(){
//   var languages = Languages.find({});
//   this.render('languageContent', {languages: languages});
// });

Router.route('/languages', function(){
  this.render('languageContent');
});