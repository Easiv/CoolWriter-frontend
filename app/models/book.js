import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  //creationDate: DS.attr('date'),

  pages: DS.hasMany('page'),
  user: DS.belongsTo('user')
});
