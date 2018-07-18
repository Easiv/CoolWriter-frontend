import Controller from '@ember/controller';
// import FindQuery from 'ember-emberfire-find-query/mixins/find-query';
import { inject } from '@ember/service';
export default Controller.extend({
  session: inject(),

  // async _createUser({ uid, currentUser: { displayName: name } }) {
  //   let userFound = false;
  //   await this.filterEqual(this.store, 'user', { uid }, function() {
  //     userFound = true;
  //   });
  //   if (userFound) {
  //     return;
  //   }
  //   let user = this.store.createRecord('user', {
  //     name,
  //     uid
  //   }).save();
  //   this.set('session.currentUser', { id: '5' });
  // },

  actions: {
    signIn() {
      this.get('session').open('firebase', { provider: 'google' }).then((data) => {});
        // this._createUser(data));
    },

    signOut() {
      this.get('session').close();
    }
  }
});
