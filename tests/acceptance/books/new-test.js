import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { pauseTest } from '@ember/test-helpers';
import { authenticateSession } from 'ember-simple-auth/test-support';
import bookPage from 'coolwriter/tests/pages/book';
import page from 'coolwriter/tests/pages/books/new';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Acceptance | books/new', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('logging user, adding book and checking if it exists', async function(assert) {

    // let books = server.createList('book', 7);

    await authenticateSession({
      profile: { email: 'mirage@fake.do' }
    });

    await page.visit()
      .title('nice title')
      .cover('')
      .author('to ja')
      .description('hielou guis')
      .create();

    await bookPage.visit();

    //await pauseTest();

    assert.equal(bookPage.bookCount, 1);
  });
});
