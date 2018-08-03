import { create, visitable, clickable, fillable } from 'ember-cli-page-object';

export default create({
  visitBooks: visitable('/books'),
  clickWrite: clickable('[data-test-write-button]'),
  fillTextArea: fillable('[data-test-text-area]'),
  fillMarkInput: fillable('[data-test-highlight-input] input'),
  fillSizeInput: fillable('[data-test-size-input] input'),
  fillFamilyInput: fillable('[data-test-family-input] input'),
  clickHighlight: clickable('[data-test-highlight-button]'),
  clickClear: clickable('[data-test-clear-button]')

});
