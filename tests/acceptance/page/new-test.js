import { module, test } from 'qunit';
import { fillIn, click, visit, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | page/new', function(hooks) {
  setupApplicationTest(hooks);

  test('is it really highlighting tho', async function(assert) {

    await visit('/page/new');
    await fillIn('input#highlightInput', 'com');
    await click('button#highbutton');

    //assert.ok(document.getElementById("textArea").classList.contains('mark'));
    assert.equal(find("#textArea").innerHTML, '<mark data-markjs="true">com</mark>plex');
    // assert.ok(document.getElementById("textArea").contains('instance.mark(input)'))
    //assert.equal(document.getElementById("textArea").value.style)
  });
});
