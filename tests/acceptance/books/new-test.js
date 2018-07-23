import { module, test } from 'qunit';
import { visit, fillIn, findAll, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | books/new', function(hooks) {
  setupApplicationTest(hooks);

  test('creating new book', async function(assert) {

    await visit('/books');
    let previousCount = findAll('[data-test-book]').length;

    await visit('/books/new');
    await fillIn('[data-test-book-title] input', 'swietna ksiazka');
    await fillIn('[data-test-book-cover] input', '');
    await fillIn('[data-test-book-author] input', 'swietny autor');
    await fillIn('[data-test-book-description] input', 'a opis to juz w ogole jest genialny');
    await click('[data-test-button-create]');

    await visit('/books');
    let currentCount = findAll('[data-test-book]').length;

    assert.equal(currentCount, previousCount + 1);
  });
});
