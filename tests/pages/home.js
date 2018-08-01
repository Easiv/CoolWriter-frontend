import { create, visitable, clickable } from 'ember-cli-page-object';

export default create({
  visit: visitable('/'),
  logout: clickable('[data-test-logout-button]'),

});
