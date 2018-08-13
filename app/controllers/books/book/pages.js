import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import Mark from 'mark.js';

export default Controller.extend({

  store: service(),
  routing: service('-routing'),
  lighted: false,
  family: 'Roboto',
  size: 16,

  switchLight() {
    this.toggleProperty('lighted');
  },

  textAreaStyle: computed('family', 'size', function() {
    return htmlSafe(`font-family: '${this.get('family')}'; font-size: ${this.get('size')}px;`);
  }),

  actions: {
    mutFamily(value) {
      this.set('family', value.replace(/[^\w ]/, ''));
    },
    mutSize(value) {
      this.set('size', value.replace(/\D/, ''));
    },
    clearText() {
      let textArea = document.querySelector('#textArea');
      textArea.innerHTML = '';
    },
    highlight() {
      let input = this.get('highlightText');
      let context = document.querySelector('#textArea');
      let instance = new Mark(context);

      if (this.get('lighted')) {
        instance.unmark();
        this.switchLight();
      } else {
        instance.mark(input);
        this.switchLight();
      }
    },
    newPage(book) {
      let page = this.get('store').createRecord('page', {
          content: '',
          bookId: book.get('id')
      })
      page.save();

      this.transitionToRoute('books.book.pages.page', page.get('id'));
    }
  }
});
