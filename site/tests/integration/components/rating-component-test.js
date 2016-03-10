import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rating-component', 'Integration | Component | rating component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set("rating", 4);
  this.render(hbs`{{rating-component rating=rating of=5}}`);

  assert.equal(this.$("span").length, 5);
  assert.equal(this.$("span.on").length, 4);
  assert.equal(this.$("span.off").length, 1);

  this.set("rating", 1);
  assert.equal(this.$("span").length, 5);
  assert.equal(this.$("span.on").length, 1);
  assert.equal(this.$("span.off").length, 4);

});
