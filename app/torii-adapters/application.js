import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
import { inject as service } from '@ember/service';

export default ToriiFirebaseAdapter.extend({
  store: service(),

  async open(authorization) {
    let { email, displayName, id } = authorization;
    return await this.get('store')
      .query('user', { email })
      .then(async(users) => await this._fetch(users, { email, displayName, id }));
  },

  async _fetch(users, user) {
    return this._userPayload(users.get('firstObject') || await this._create(user));
  },

  _create(user) {
    return this.get('store').createRecord('user', user).save();
  },

  _userPayload(currentUser) {
    return { currentUser };
  }
});
