import DS from 'ember-data';

const { attr, hasMany, Model } = DS;

export default Model.extend({
  name: attr(),
  books: hasMany('book')
});
