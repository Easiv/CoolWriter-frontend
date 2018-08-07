import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hash({
      book: this.store.find('book', params.book_id)
    });
  },
  //
  // setupController(controller, model) {
  //   controller.set('book', model);
  // }
});
