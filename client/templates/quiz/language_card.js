
Template.languageCard.events({
  // "click .level-button": function(e){
  //   e.preventDefault();
  //   selectQuizButton = e.currentTarget;

  //   Router.go("/quiz");
  // }
  "click button": function(e) {
    e.preventDefault();

    selectQuizButton = e.currentTarget;
    languageAndLevel = $(selectQuizButton).val().split(' ');
    Session.set("language", languageAndLevel[0]);
    Session.set("level", languageAndLevel[1]);

    if(Session.get("level") === "1") {
      Session.set("totalQuizQuestions", 10);
    } else if(Session.get("level") === "2") {
      Session.set("totalQuizQuestions", 15);
    } else if(Session.get("level") === "3") {
      Session.set("totalQuizQuestions", 20);
    }

    if(Session.get("level") === "1") {
      Router.go("/quiz");
    } else {
      if (Meteor.user()) {
        Router.go("/quiz");
      }
    }
  },

  "mouseenter .needs-login": function() {
    if(!Meteor.user()) {
      $('[data-toggle="tooltip"]').tooltip();
    }
  }
});