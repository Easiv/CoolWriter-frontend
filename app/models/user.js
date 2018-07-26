import DS from 'ember-data';

const { attr, hasMany, Model } = DS;

export default Model.extend({
  name: attr('string'),
  photoUrl: attr('string'),
  email: attr('string'),
  books: hasMany('book')
});
