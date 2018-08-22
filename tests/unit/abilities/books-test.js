import { moduleFor, test } from 'ember-qunit';

moduleFor('ability:books', 'Unit | Ability | books', {
  needs: ['service:session']
});

test('can if user is admin', function(assert) {

  let user = {
    isAdmin: true
  };
  let ability = this.container.lookup('ability:books');
  ability.get('session').set('user', user);

  assert.ok(ability.get('canSearch'));
});

test('cant if user is not admin', function(assert) {

  let user = {
    isAdmin: false
  };
  let ability = this.container.lookup('ability:books');
  ability.get('session').set('user', user);

  assert.notOk(ability.get('canSearch'));
});
