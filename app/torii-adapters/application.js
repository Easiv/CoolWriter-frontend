import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { get, setProperties } from '@ember/object';

export default ToriiFirebaseAdapter.extend({
  store: service(),
  open(authentication) {
    debugger;
    return hash({
      uid: authentication.uid,
      currentUser: this._findOrCreateUser(authentication)
    })
  },
  _findOrCreateUser({uid, photoURL: photoUrl, displayName: name}) {
    let store = get(this,'store');
    return store.findRecord('user', uid)
      .then((user) => this._findUser(user, photoUrl, name))
      .catch(() => this._createUser(photoUrl, name));
  },
  _findUser(user, photoUrl, name) {
    setProperties(user, photoUrl, name);
    return user.save();
  },
  _createUser(photoUrl, name) {
    let user = get(this,'store').createRecord('user', {photoUrl, name});
    return user.save();
  }
});
