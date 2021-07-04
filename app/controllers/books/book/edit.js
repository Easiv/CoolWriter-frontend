import Controller from '@ember/controller';
import { inject } from '@ember/service';
export default Controller.extend({
  routing: inject('-routing'),
  actions: {
    saveBook() {
      this.get('model').save().then(() => {
        this.transitionToRoute('books.index');
      });
    }
  }
});
