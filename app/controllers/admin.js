import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  queryParams: ['title'],
  title: null,
  search: null,

  filterBooks: computed('title', function() {
    let title = this.get('title');
    if (title) {
      return this.get('model').filterBy('title', title);
    }
  })
});
