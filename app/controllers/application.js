import Controller from '@ember/controller';

export default Controller.extend({

  isClicked: true,

  actions: {
    switchPage() {
      this.toggleProperty('isClicked');
    }
  }
});
