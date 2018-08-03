import { create, visitable, count } from 'ember-cli-page-object';

export default create({
  visit: visitable('/books'),
  bookCount: count('[data-test-book]', { scope: '.bookShelf' })
});
