import { module, test } from 'qunit';
import { currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import page from 'coolwriter/tests/pages/books';
import { authenticateSession, currentSession } from 'ember-simple-auth/test-support';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { logUser } from 'coolwriter/tests/helpers/login';

module('Acceptance | books', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('checking if plus button exists', async function(assert) {
    await page.visit()
      .createBook();

    assert.equal(currentURL(), '/books/new');
  });

  test('checking if book shelf is empty when user is not logged in', async function(assert) {
    await page.visit();

    assert.notOk(currentSession(this.application).get('isAuthenticated'));
    assert.notOk(page.bookCount, 0);
  });

  test('checking if new logged user has empty shelf', async function(assert) {
    await authenticateSession({
      profile: { email: 'unusual@mail.com' }
    });
    await page.visit();

    assert.ok(currentSession(this.application).get('isAuthenticated'));
    assert.equal(page.bookCount, 0);
  });

  test('is the add book pane first when its no books?', async function(assert) {

    await logUser();
    await page.visit();

    assert.equal(page.allPanes().length, 1);
    assert.equal(page.firstPane().className, 'plusIcon');
  });

  test('is the add book pane first when there are some books?', async function(assert) {

    await logUser();
    await page.createBooks(3);
    await page.visit();

    assert.equal(page.allPanes().length, 4);
    assert.equal(page.firstPane().className, 'plusIcon');
  });
});
