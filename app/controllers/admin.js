import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';

export default Controller.extend({
  queryParams: ['title'],
  title: null,
  search: null,

  filterBooks: computed('title', function() {
    let title = this.get('title');
    if(title) {
      let books = this.store.query('book', {
        orderBy: 'title',
        equalTo: title
      });
      return books;
    }
  }),

  triggerSearch: observer('search', function() {
    let title = this.get('search');
    this.transitionToRoute({ queryParams: { title } });
  })
});
