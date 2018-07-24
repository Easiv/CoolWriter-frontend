import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  routing: service('-routing'),

  actions: {
    saveBook() {
      this.get('model').save().then(() => {
        this.get('routing').transitionTo('books.index', []);
      });
    }
  }
});
