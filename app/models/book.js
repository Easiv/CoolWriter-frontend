import DS from 'ember-data';

const { attr, hasMany, Model } = DS;

export default Model.extend({
  cover: attr('string', { defaultValue: 'http://via.placeholder.com/200x300' }),
  title: attr('string'),
  author: attr('string'),
  userEmail: attr('string'),
  description: attr('string'),
  pageCount: attr('number'),
  pages: hasMany('page')
});
