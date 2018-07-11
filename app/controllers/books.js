import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteBook(book) {
      book.destroyRecord();
    }
  }
});
