import { module, test } from 'qunit';
import { visit, click, findAll, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | books', function(hooks) {
  setupApplicationTest(hooks);

  test('are books displaying', async function(assert) {
    await visit('/books');
    await click('[data-test-create-book-button]');
    await findAll('model.book');

    assert.equal(currentURL(), '/books/new');
  });
});
