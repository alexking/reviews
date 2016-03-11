import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    // Just grab the reviews, no Ember Data
    return Ember.$.getJSON("/api/reviews.json");
  }
});
