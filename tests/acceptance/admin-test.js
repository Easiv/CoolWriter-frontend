import { module, test } from 'qunit';
import { currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import adminPage from 'coolwriter/tests/pages/admin';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import Service from '@ember/service';

module('Acceptance | books', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  let sessionMock = Service.extend({
    user: { isAdmin: true },
    isAuthenticated: true
  });

  hooks.beforeEach(function() {
    this.owner.register('service:session', sessionMock);
  });

  test('check if it finds only 3 books with same title', async function(assert) {

    server.createList('book', 2);
    server.createList('book', 3, { title: 'testBook' });

    await adminPage.visit();
    await adminPage.fillSearchInput('testBook');

    assert.equal(adminPage.bookRowCount, 3);
    assert.equal(currentURL(), '/admin?title=testBook');
  });

  test('check if it finds only 5 if provided no title', async function(assert) {

    server.createList('book', 5);
    await adminPage.visit();

    assert.equal(adminPage.bookRowCountElse, 5);
  });
});
