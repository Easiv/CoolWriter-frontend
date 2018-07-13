import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createBook() {
      let newBook = this.store.createRecord('book', {
        title: this.get('title'),
        author: this.get('author'),
        cover: this.get('cover')
      });
      newBook.save();
    }
  }
});
