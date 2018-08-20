import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
  session: service(),
  store: service(),

  actions: {
    login() {
      let lockOptions = {
        auth: {
          redirect: false,
          scope: 'openid user_metadata'
        },
        languageDictionary: { title: 'CoolWriter' }
      };
      this.get('session').authenticate('authenticator:auth0-lock-firebase', lockOptions);
    },

    logout() {
      this.get('session').invalidate();
      this.get('store').unloadAll();
    },

    toggleAdmin() {
      let user = this.get('model');
      this.toggleProperty('model.firstObject.isAdmin');
      user.save();
    }
  }
});
