import { create, visitable, clickable, fillable } from 'ember-cli-page-object';
import { find } from '@ember/test-helpers';

export default create({

  areaContent() {
    return find(this.textArea).innerHTML;
  },

  areaFontSize() {
    return find(this.textArea).style.fontSize;
  },

  areaFontFamily() {
    return find(this.textArea).style.fontFamily;
  },

  toggleHover(pane) {
    return document.querySelector('.bookShelf').children[pane].classList.remove('editHover');
  },

  textArea: '[data-test-text-area]',
  isMarked: 'fancy t<mark data-markjs="true">es</mark>t text',

  visit: visitable('/books/1/pages/1'),

  clickWrite: clickable('[data-test-write-button]'),
  clickHighlight: clickable('[data-test-highlight-button]'),
  clickClear: clickable('[data-test-clear-button]'),
  create: clickable('data-test-add-page'),
  click: clickable('data-test-page-number'),

  fillTextArea: fillable('[data-test-text-area]'),
  fillMarkInput: fillable('[data-test-highlight-input] input'),
  fillSizeInput: fillable('[data-test-size-input] input'),
  fillFamilyInput: fillable('[data-test-family-input] input')

});
