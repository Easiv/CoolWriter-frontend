import { create, visitable, clickable, fillable } from 'ember-cli-page-object';

export default create({
  visit: visitable('/books/new'),
  title: fillable('[data-test-book-title] input'),
  cover: fillable('[data-test-book-cover] input'),
  author: fillable('[data-test-book-author] input'),
  description: fillable('[data-test-book-description] input'),
  create: clickable('[data-test-button-create]')
});
