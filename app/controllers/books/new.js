import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    createBook() {
      let user = { };
      debugger;
      let newBook = this.store.createRecord('book', {
        title: this.get('title'),
        author: this.get('author'),
        cover: this.get('cover'),
        description: this.get('description'),
        user: this.get('session.currentUser')

      });
      newBook.save();
    }
  }
});
