import Route from '@ember/routing/route';
import { inject } from '@ember/service';
export default Route.extend({
  session: inject(),
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn() {
      this.get('session').open('firebase', { provider: 'google' });
    },
    signOut() {
      this.get('session').close();
    }
  }
});
