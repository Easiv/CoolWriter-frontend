import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  i18n: inject(),

  actions: {
    deleteBook(book) {
      if(confirm(this.get('i18n').t('delete.confirm'))) book.destroyRecord();
    }
  }
});
