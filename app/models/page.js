import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  content: attr('string'),
  book: belongsTo('book'),
  bookId: attr('string')
});
