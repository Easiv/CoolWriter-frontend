import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      pages: this.store.query('page', {
        orderBy: 'bookId',
        equalTo: this.modelFor('books.book').get('id')
      }),
      book: this.modelFor('books.book')
    });
  }
});
