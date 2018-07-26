import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  number: attr('number'),
  content: attr('string'),
  book: belongsTo('book')
});
