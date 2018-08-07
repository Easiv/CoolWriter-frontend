import { create, visitable, clickable, count, contains } from 'ember-cli-page-object';

export default create({

  createBook() {
    server.create('book', 1);
  },

  visit: visitable('/books'),
  bookCount: count('[data-test-book]', { scope: '.bookShelf' }),
  clickCreate: clickable('[data-test-create-book-button]'),
  contains: contains('span')
});
