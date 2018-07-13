import DS from 'ember-data';

const { attr, hasMany, Model } = DS;

export default Model.extend({
  name: attr('string'),
  uid: attr('string'),
  books: hasMany('book')
});
