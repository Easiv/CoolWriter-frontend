import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createBook: function() {
      let newBook = this.store.createRecord('book', {
        title: this.get('title'),
        author: this.get('author')
      });
      newBook.save();
      //this.transitionTo('books');
    }
  }
});
