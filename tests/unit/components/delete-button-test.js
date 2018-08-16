import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Unit | Component | delete-button', function(hooks) {
  setupRenderingTest(hooks);

  test('function is called', async function(assert) {
    assert.expect(1);

    let ourBook = { name: 'test' };

    this.set('deleteAction', (book) => {
      assert.equal(book, ourBook);
    });
    this.set('book', ourBook);

    await render(hbs`{{delete-button deleteBook=(action deleteAction book)}}`);

    await click('[data-test-delete-button]');
  });
});
