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

    setAdmin() {
      debugger;
      let user = this.get('model');
      let isAdmin = this.get('model.firstObject.isAdmin');
      console.log(`Before set - current user isAdmin is ${isAdmin}`);
      //debugger;
      this.set(this.get('model.firstObject.isAdmin'), true);
      console.log(`After set - current user isAdmin is ${isAdmin}`);
      user.save();
    }
  }
});
