import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  queryParams: ['title'],
  title: null,
  search: null,

  filterBooks: computed('title', function() {
    let title = this.get('title');
    if (title) {
      let books = this.store.query('book', {
        orderBy: 'title',
        equalTo: title
      });
      return books;
    }
  }),

  actions: {
    triggerSearch(title) {
      this.set('title', title);
    }
  }
});
