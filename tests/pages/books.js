import { create, visitable, clickable, count, contains } from 'ember-cli-page-object';
import { find } from '@ember/test-helpers';

export default create({

  firstPane() {
    return find('.bookShelf').children[0];
  },

  allPanes() {
    return find('.bookShelf').children;
  },

  visit: visitable('/books'),
  bookCount: count('[data-test-book]', { scope: '.bookShelf' }),
  clickCreate: clickable('[data-test-create-book-button]'),
  contains: contains('span')
});
