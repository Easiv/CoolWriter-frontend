import Controller from '@ember/controller';
import Mark from 'mark.js';

export default Controller.extend({

  isClicked: true,
  lighted: false,

  switchLight() {
    this.toggleProperty('lighted');
  },

  actions: {

    clearText() {
      let textArea = document.querySelector("#textArea");
      this.set.textArea.value = '';
    },

    changeFont() {
      let textArea = document.querySelector("#textArea");
      let fontVar = document.querySelector("#fontInput").value;
      let fontSize = document.querySelector("#fontInput2").value;
      textArea.style.fontFamily = fontVar;
      textArea.style.fontSize = fontSize + "px";
    },

    highlight() {
      let input = document.querySelector("#highlightInput").value;
      let context = document.querySelector("#textArea");
      let instance = new Mark(context);

      if(this.get('lighted')) {
        instance.unmark();
        this.switchLight();
      }
      else {
        instance.mark(input);
        this.switchLight();
      }
    }
  }
});
