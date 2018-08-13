import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  keyPress() {
    this.actions.savePage.call(this);
  },

    savePage() {
      let content = document.querySelector('#textArea').innerText;
      let page = this.get('page');
      page.set('content', content);
      page.save();
      console.log('saved');
    }
});
