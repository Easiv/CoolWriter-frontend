import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  i18n: service(),
  session: service(),

  init() {
    this._super(...arguments);

    this.get('user');
  },

  email: alias('session.data.authenticated.profile.email'),

  user: computed('email', function() {
    this._loadBooks();
  }),

  actions: {
    deleteBook(book) {
      if (confirm(this.get('i18n').t('delete.confirm'))) {
        book.destroyRecord();
      }
    }
  },

  _loadBooks() {
    if ( this.get('email') ) {
      let books = this.store.query('book', {
        orderBy: 'user_email',
        equalTo: this.get('email')
      });
      this.set('books', books);
    }
  },
});
