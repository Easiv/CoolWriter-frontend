import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  keyPress(event) {
    let page = this.get('page');
    page.set('content', event.currentTarget.innerText);
    page.save();
  }
});
