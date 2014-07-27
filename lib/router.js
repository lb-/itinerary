Router.configure({
  layoutTemplate: 'main',
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('itinerary', {
    path:'/:_id',
    yieldTemplates: {
      'nav': {to: 'nav'},
    }
    });
});
