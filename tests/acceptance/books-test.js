import { module, test } from 'qunit';
import { currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import bookPage from 'coolwriter/tests/pages/books';
import { authenticateSession, currentSession } from 'ember-simple-auth/test-support';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { logUser } from 'coolwriter/tests/helpers/login';

module('Acceptance | books', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('checking if plus button exists', async function(assert) {
    await bookPage.visit()
      .clickCreate();

    assert.equal(currentURL(), '/books/new');
  });

  test('checking if book shelf when user is not logged in', async function(assert) {
    await bookPage.visit();

    assert.notOk(currentSession(this.application).get('isAuthenticated'));
    assert.notOk(bookPage.bookCount, 0);
  });

  test('checking if new logged user has empty shelf', async function(assert) {
    await authenticateSession({
      profile: { email: 'unusual@mail.com' }
    });
    await bookPage.visit();

    assert.ok(currentSession(this.application).get('isAuthenticated'));
    assert.equal(bookPage.bookCount, 0);
  });

  test('checking if the book contains user email', async function(assert) {
    await logUser();
    await bookPage.createBook();
    await bookPage.visit();

    assert.equal(currentURL(), '/books');
  });
});
