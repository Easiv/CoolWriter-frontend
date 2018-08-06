import { create, visitable, clickable, count } from 'ember-cli-page-object';

export default create({
  visit: visitable('/books'),
  bookCount: count('[data-test-book]', { scope: '.bookShelf' }),
  createBook: clickable('[data-test-create-book-button]')
});
