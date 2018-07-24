import Controller from '@ember/controller';
// import FindQuery from 'ember-emberfire-find-query/mixins/find-query';
import { inject } from '@ember/service';
export default Controller.extend({
  session: inject(),

  actions: {
    login() {
      const lockOptions = {
       auth: {
         params: {
           scope: 'openid user_metadata'
         }
       }
      };
      this.get('session').authenticate('authenticator:auth0-lock', lockOptions);
    },

    logout() {
      this.get('session').invalidate();
    }
  }

});
