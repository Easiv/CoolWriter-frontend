import DS from 'ember-data';

export default DS.Model.extend({
  books: DS.belongsTo('book'),
});
