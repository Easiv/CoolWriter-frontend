import DS from 'ember-data';

const { attr, hasMany, belongsTo, Model } = DS;

export default Model.extend({
  title: attr('string'),
  author: attr('string'),
  pages: hasMany('page'),
  user: belongsTo('user')
});
