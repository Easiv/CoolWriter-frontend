import { module, test } from 'qunit';
import { visit, fillIn, findAll, click } from '@ember/test-helpers';
import { setupApplicationTest, pauseTest } from 'ember-qunit';
import { currentSession, authenticateSession, invalidateSession } from 'ember-simple-auth/test-support';
import bookPage from 'coolwriter/tests/pages/book';
import page from 'coolwriter/tests/pages/books/new';


module('Acceptance | books/new', function(hooks) {
  setupApplicationTest(hooks);

  test('logging user, adding book and checking if it exists', async function(assert) {
    await authenticateSession({
      profile: { name: 'basdasda', email: 'stefan@lubieplacki.pl' },
      sum: 42
    });
    await page.visit()
              .title('nice title')
              .cover('')
              .author('to ja')
              .description('hielou guis')
              .create();

    await bookPage.visit();

    assert.equal(bookPage.bookCount, 1);
  });
});
