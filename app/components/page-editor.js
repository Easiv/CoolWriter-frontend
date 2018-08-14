import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  keyPress(event) {
    let page = this.get('page');
    let area = document.querySelector('#textArea').innerText;
    page.set('content', area);
    page.save();
  }
});
