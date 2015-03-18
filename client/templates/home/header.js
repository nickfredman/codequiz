 Template.header.events({
  "click #login-buttons-logout": function(e) {
    e.preventDefault();
    Session.set("numberCorrect", 0);
    Session.set("numberIncorrect", 0);
    Session.set("language", "");
    Session.set("level", "");
    Session.set("totalQuizQuestions", 0);
    Router.go('/languages');
  }
});