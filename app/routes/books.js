import Route from '@ember/routing/route';
//  import { inject as service } from '@ember/service';
//  import { computed } from '@ember/object';

export default Route.extend({
  model() {
    return this.store.findAll('book');
  }

// session: service(),

  // init() {
  //   this._super(...arguments);

  //   this.get('user');
  // },

  // user: computed('session.user.email', function() {
  //   this._loadBooks();
  // }),

  // _loadBooks() {
  //   let books = this.store.query('book', {
  //     email: this.get('session.user.email')
  //   });
  //   this.set('books', books);
  // }
});
