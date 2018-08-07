import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    console.log(params);
    return RSVP.hash({
      pages: this.store.findAll('page', {
        orderBy: 'bookId',
        equalTo: params.book_id
      }),
      book: this.modelFor('book')
    });
  }
});
