import Route from '@ember/routing/route';
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';
import { inject } from '@ember/service';
export default Route.extend(FindQuery, {
  session: inject(),
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },

  async _createUser({ uid, currentUser: { displayName: name } }) {
    let userFound = false;
    await this.filterEqual(this.store, 'user', { uid }, function() {
      userFound = true;
    });
    if (userFound) {
      return;
    }
    this.store.createRecord('user', {
      name,
      uid
    }).save();
  },

  actions: {
    signIn() {
      this.get('session').open('firebase', { provider: 'google' }).then((data) => {
        this.get('session.currentUser').save();
      }
      );
    },

    signOut() {
      this.get('session').close();
    }
  }
});
