import { create, visitable, clickable, fillable } from 'ember-cli-page-object';
import { find } from '@ember/test-helpers';

export default create({

  createBook() {
    server.create('book', 1);
  },

  areaContent() {
    return find(this.textArea).innerHTML;
  },

  areaFontSize() {
    return find(this.textArea).style.fontSize;
  },

  areaFontFamily() {
    return find(this.textArea).style.fontFamily;
  },

  toggleHover() {
    return document.querySelector('.bookShelf').children[1].classList.remove('editHover');
  },

  textArea: '[data-test-text-area]',
  isMarked: 'fancy t<mark data-markjs="true">es</mark>t text',

  visitBooks: visitable('/books'),

  clickWrite: clickable('[data-test-write-button]'),
  clickHighlight: clickable('[data-test-highlight-button]'),
  clickClear: clickable('[data-test-clear-button]'),

  fillTextArea: fillable('[data-test-text-area]'),
  fillMarkInput: fillable('[data-test-highlight-input] input'),
  fillSizeInput: fillable('[data-test-size-input] input'),
  fillFamilyInput: fillable('[data-test-family-input] input')

});
