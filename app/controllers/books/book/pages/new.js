import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  session: service(),
  routing: service('-routing'),

  actions: {
    createPage() {

      let newPage = this.store.createRecord('page', {
        number: this.get('number'),
        content: this.get('content'),
        book: this.get('book')
      }).save().then(() => {
        this.get('routing').transitionTo('books.pages', []);
      });
    }
  }
});
