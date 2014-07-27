if (Meteor.isClient) {
  UI.registerHelper('isSelectedSection', function() {
    return Session.get('section') === this.template;
  });

  Template.nav.sections = function() {
    return [
      { title: 'Info', template: 'info', icon: 'fa-info-circle'},
      { title: 'Schedule', template: 'schedule', icon: 'fa-calendar'},
      { title: 'Transport', template: 'transport', icon: 'fa-car'},
      { title: 'Accommodation', template: 'accommodation', icon: 'fa-building'},
      { title: 'All', template: 'all', icon: 'fa-list-alt'},
    ]
  }
  Template.itinerary.section = function() {
    Session.setDefault('section', 'info');
    return Session.get('section');
  }

  Template.nav.events({
    'click .select-section': function() {
      var section = this.template;
      Session.set( 'section', section );
      window.scrollTo(0,0);
    },
  });

  Template.itinerary.events({
    'click .top': function() {
      window.scrollTo(0,0);
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
