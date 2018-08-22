import { reads } from '@ember/object/computed';
import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';

export default Ability.extend({
  session: service(),

  canSearch: reads('session.user.isAdmin').readOnly()
});
