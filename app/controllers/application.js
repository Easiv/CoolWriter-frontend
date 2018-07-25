import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { observer } from '@ember/object';
export default Controller.extend({
  session: inject(),

  actions: {
    login() {
      let lockOptions = {
        auth: {
          redirect: false,
          scope: 'openid user_metadata',
        },
        languageDictionary: { title: 'CoolWriter' }
      };
      this.get('session').authenticate('authenticator:auth0-lock-firebase', lockOptions);
    },

    logout() {
      this.get('session').invalidate();
    }
  }
});
