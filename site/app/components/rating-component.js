import Ember from 'ember';

export default Ember.Component.extend({

  /**
   * Computed property to make displaying the rating easy in handlebars
   *
   * For a 4 out of 5 rating, it would return
   * [true, true, true, true, false]
   *
   * @returns array
   */
  ratingElements: Ember.computed("rating", "of", function() {

    var elements = [];

    // Add an element for each possible rating spot
    for (var i = 0; i < this.get("of"); i++) {

      // true if the element should be filled in, false otherwise
      elements.push((i < this.get("rating")));
    }

    return elements;
  })

});
