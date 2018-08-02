import { module, test } from 'qunit';
import { fillIn, click, visit, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | books/pages', function(hooks) {
  setupApplicationTest(hooks);

  test('is it really highlighting though', async function(assert) {

    await visit('/books');
    await click('[data-test-write-button]');
    await fillIn('[data-test-text-area]', 'fancy test text');
    await fillIn(document.querySelectorAll('.flexSpace input')[2], 'es');
    await click('[data-test-highlight-button]');

    assert.equal(find('[data-test-text-area]').innerHTML, 'fancy t<mark data-markjs="true">es</mark>t text');
  });

  test('does it change the font size', async function(assert) {

    await visit('/books');
    await click('[data-test-write-button]');
    await fillIn(document.querySelectorAll('.flexSpace input')[1], 25);

    assert.equal(find('[data-test-text-area]').style.fontSize, '25px');
  });

  test('does it change the font family', async function(assert) {

    await visit('/books');
    await click('[data-test-write-button]');
    await fillIn(document.querySelectorAll('.flexSpace input')[0], 'arial');

    assert.equal(find('[data-test-text-area]').style.fontFamily, 'arial');
  });

  test('is it really clearing the text', async function(assert) {

    await visit('/books');
    await click('[data-test-write-button]');
    await click('[data-test-clear-button]');

    assert.equal(find('[data-test-text-area]').innerHTML, '');
  });
});
