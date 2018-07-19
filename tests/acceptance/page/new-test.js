import { module, test } from 'qunit';
import { fillIn, click, visit, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | page/new', function(hooks) {
  setupApplicationTest(hooks);

  test('is it really highlighting tho', async function(assert) {

    await visit('/page/new');
    await fillIn('[data-test-text-area]', 'fancy test text');
    await fillIn(document.querySelectorAll('.flexSpace input')[2], 'es');
    await click('[data-test-highlight-button]');

    assert.equal(find('[data-test-text-area]').innerHTML, 'fancy t<mark data-markjs="true">es</mark>t text');
  });
});
