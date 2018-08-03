import { module, test } from 'qunit';
import { find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { authenticateSession } from 'ember-simple-auth/test-support';
import page from 'coolwriter/tests/pages/books/book/pages';

module('Acceptance | books/pages', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('is it really highlighting though', async function(assert) {

    server.create('book', 1);
    let textArea = '[data-test-text-area]';
    let isMarked = 'fancy t<mark data-markjs="true">es</mark>t text';

    await authenticateSession({
      profile: { email: 'mirage@fake.do' }
    });

    await page.visitBooks();
    await page.clickWrite();
    await page.fillTextArea('fancy test text');
    await page.fillMarkInput('es');
    await page.clickHighlight();

    assert.equal(find(textArea).innerHTML, isMarked);
  });

  test('does it change the font size', async function(assert) {

    server.createList('book', 1);
    let textArea = '[data-test-text-area]';

    await authenticateSession({
      profile: { email: 'mirage@fake.do' }
    });

    await page.visitBooks();
    await page.clickWrite();
    await page.fillSizeInput(25);

    assert.equal(find(textArea).style.fontSize, '25px');
  });

  test('does it change the font family', async function(assert) {

    server.createList('book', 1);
    let textArea = '[data-test-text-area]';

    await authenticateSession({
      profile: { email: 'mirage@fake.do' }
    });

    await page.visitBooks();
    await page.clickWrite();
    await page.fillFamilyInput('arial');

    assert.equal(find(textArea).style.fontFamily, 'arial');
  });

  test('is it really clearing the text', async function(assert) {

    server.createList('book', 1);
    let textArea = '[data-test-text-area]';

    await authenticateSession({
      profile: { email: 'mirage@fake.do' }
    });

    await page.visitBooks();
    await page.clickWrite();
    await page.clickClear();

    assert.equal(find(textArea).innerHTML, '');
  });
});
