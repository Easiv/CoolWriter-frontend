import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  i18n: service(),

  actions: {
    deleteBook(book) {
      if (this.get('deleteBook')) {
        this.get('deleteBook')(book);
      }
    }
  }
});
