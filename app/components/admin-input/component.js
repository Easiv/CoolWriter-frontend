import Component from '@ember/component';

export default Component.extend({
  keyUp() {
    let title = this.get('search');
    this.sendAction('action', title);
  }
});
