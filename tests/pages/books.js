import { create, visitable, clickable, count } from 'ember-cli-page-object';
import { find } from '@ember/test-helpers';

export default create({

  createBooks(amount) {
    server.createList('book', amount);
  },

  firstPane() {
    return find('.bookShelf').children[0];
  },

  allPanes() {
    return find('.bookShelf').children;
  },

  visit: visitable('/books'),
  bookCount: count('[data-test-book]'),
  createBook: clickable('[data-test-create-book-button]')
});
