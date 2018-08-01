import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | books', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting new book page', async function(assert) {
    await visit('/books');
    await click('[data-test-create-book-button]');

    assert.equal(currentURL(), '/books/new');
  });

  test('checking if book shelf is empty after logout', async function(assert) {
    await visit('/books');
    await click ('[data-test-logout-button]');
    const bookShelf = document.querySelector("#bookShelf");

    assert.equal(bookShelf, "");
  });
});
