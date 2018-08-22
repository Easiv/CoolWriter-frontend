import { create, visitable, count, fillable } from 'ember-cli-page-object';

export default create({

  visit: visitable('/admin'),
  bookRowCount: count('[data-test-admin-search-row]', { scope: '.bookTable' }),
  bookRowCountElse: count('[data-test-admin-search-row-else]', { scope: '.bookTable' }),
  fillSearchInput: fillable('[data-test-admin-input] input')
});
