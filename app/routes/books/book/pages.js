import RSVP from 'rsvp';
import Route from '@ember/routing/route';

const { hash } = RSVP;

export default Route.extend({
  model() {
    return hash({
      pages: this.store.findAll('page'),
      book: this.modelFor('books.book')
    });
  }
});
