import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import bookPage from 'coolwriter/tests/pages/book';
import { authenticateSession, currentSession } from 'ember-simple-auth/test-support';

module('Acceptance | books', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting new book page', async function(assert) {
    await visit('/books');
    await click('[data-test-create-book-button]');

    assert.equal(currentURL(), '/books/new');
  });

  test('checking if book shelf when user is not logged in', function(assert) {
    bookPage.visit();

    assert.notOk(bookPage.contains('[data-test-book]'));
  });

  test('checking if new logged user has empty shelf', async function(assert) {
    await authenticateSession({
      userId: 1,
      otherData: 'some-data'
    });
    await bookPage.visit();

    assert.ok(currentSession(this.application).get('isAuthenticated'));
    assert.equal(bookPage.bookCount, 0);
  });
});
