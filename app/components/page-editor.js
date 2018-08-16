import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import Mark from 'mark.js';

export default Component.extend({
  store: service(),
  family: 'Roboto',
  size: 16,
  lighted: false,

keyPress() {
  let page = this.get('page');
  let area = document.querySelector('#textArea').innerText;
  page.set('content', area);
  page.save();
},

switchLight() {
  this.toggleProperty('lighted');
},

textAreaStyle: computed('family', 'size', function() {
  return htmlSafe(`font-family: '${this.get('family')}'; font-size: ${this.get('size')}px;`);
}),

actions: {
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

  clearText() {
    return document.querySelector('#textArea').innerText = "";
  },

  mutFamily(value) {
    this.set('family', value.replace(/[^\w ]/, ''));
  },

  mutSize(value) {
    this.set('size', value.replace(/\D/, ''));
  }
}
});
