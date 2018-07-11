import DS from 'ember-data';

const { belongsTo, Model } = DS;

export default Model.extend({
  book: belongsTo('book')
});
