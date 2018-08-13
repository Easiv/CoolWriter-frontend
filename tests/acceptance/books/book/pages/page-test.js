import { module, test } from 'qunit';
import { setupApplicationTest, pauseTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import page from 'coolwriter/tests/pages/books/book/pages/page';
import { logUser } from 'coolwriter/tests/helpers/login';

module('Acceptance | books/pages/page', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Is it really highlighting though?', async function(assert) {

    // setup
    // visit route with specific book/page
    // try to highlight text and check if it is highlighted properly
    // seperate spec for "+"


    await logUser();
    await server.create('book', 1);
    await page.visitBooks();
    await page.toggleHover(1);
    await page.clickWrite();
    await pauseTest();
    await page.create();
    await page.fillTextArea('fancy test text');
    await page.fillMarkInput('es');
    await page.clickHighlight();

    assert.equal(page.areaContent(), page.isMarked);
  });

  test('Does it change the font size?', async function(assert) {

    await logUser();
    await server.create('book', 1);
    await page.visitBooks();
    await page.toggleHover(1);
    await page.clickWrite();
    await page.create();
    await page.fillSizeInput(25);

    assert.equal(page.areaFontSize(), '25px');
  });

  test('Does it change the font family?', async function(assert) {

    await logUser();
    await server.create('book', 1);
    await page.visitBooks();
    await page.toggleHover(1);
    await page.clickWrite();
    await page.create();
    await page.fillFamilyInput('arial');

    assert.equal(page.areaFontFamily(), 'arial');
  });

  test('Is it really clearing the text?', async function(assert) {

    await logUser();
    await server.create('book', 1);
    await page.visitBooks(1);
    await page.toggleHover();
    await page.clickWrite();
    await page.create();
    await page.clickClear();

    assert.equal(page.areaContent(), '');
  });
});
