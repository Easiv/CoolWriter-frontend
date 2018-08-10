import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  actions: {
    savePage() {
      let content = document.querySelector('#textArea').innerText;
      let page = this.get('model');
      page.set('content', content);
      page.save();
    }
  }
});
