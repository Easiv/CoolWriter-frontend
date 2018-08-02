import { create, visitable, count } from 'ember-cli-page-object';

export default create({
  visit: visitable('/books'),
  bookCount: count('span', { scope: '.bookShelf' })
});
