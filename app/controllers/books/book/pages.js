import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  routing: service('-routing'),

  actions: {
    newPage(book, amount) {
      let page = this.get('store').createRecord('page', {
        content: '',
        bookId: book.get('id')
      });
      page.save();

      book.set('pageCount', amount + 1);
      book.save();

      this.transitionToRoute('books.book.pages.page', page.get('id'));
    }
  }
});
