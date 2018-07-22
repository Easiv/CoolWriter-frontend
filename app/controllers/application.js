import Controller from '@ember/controller';
import { inject } from '@ember/service';
export default Controller.extend({
  session: inject(),
  routing: inject('-routing'),

  actions: {
    signIn() {
      this.get('session').open('firebase', { provider: 'google' });
    },

    signOut() {
      this.get('session').close();
      this.get('routing').transitionTo('/');
    }
  }
});
