import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      pages: this.store.query('page', {
        orderBy: 'book',
        equalTo: this.modelFor('books.book').get('id')
      }),
      book: this.modelFor('books.book')
    });
  }
});
