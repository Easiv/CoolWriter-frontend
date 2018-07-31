import Authenticator from 'ember-simple-auth-auth0/authenticators/auth0-lock';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import getSessionExpiration from 'ember-simple-auth-auth0/utils/get-session-expiration';
import now from 'ember-simple-auth-auth0/utils/now';

export default Authenticator.extend({
  store: service(),
  session: service(),

  authenticate(options) {
    return this.get('auth0').showLock(options).then((sessionData) => {
      this._setUserToSession(sessionData.profile);
      return sessionData;
    });
  },

  restore(data) {
    this._setUserToSession(data.profile);

    let expiresAt = getSessionExpiration(data || {});
    if (expiresAt > now()) {
      return RSVP.resolve(data);
    } else {
      return RSVP.reject();
    }
  },

  _setUserToSession(profileData) {
    this._findOrCreateUser(profileData).then((user) => {
      this.set('session.user', user);
    });
  },

  _findOrCreateUser({ email, picture: photoUrl, name }) {
    return this.get('store').query('user', { email })
      .then((users) =>
        users.get('firstObject') || this._createUser(photoUrl, name, email));
  },

  _createUser(photoUrl, name, email) {
    let user = this.get('store').createRecord('user', { photoUrl, name, email });
    return user.save();
  }
});
