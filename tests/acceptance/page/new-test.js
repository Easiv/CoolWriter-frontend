import { module, test } from 'qunit';
import { fillIn, click, visit, find, andThen } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | page/new', function(hooks) {
  setupApplicationTest(hooks);

  test('is it really highlighting tho', async function(assert) {

    await visit('/page/new');
    let highlightInput = document.querySelectorAll('.flexSpace input')[2];
    await fillIn('#textArea', 'fancy test text');
    await fillIn(highlightInput, 'es');
    await click('button#highbutton');

    assert.equal(find('#textArea').innerHTML, 'fancy t<mark data-markjs="true">es</mark>t text');
  });
});
