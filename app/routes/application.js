import Route from '@ember/routing/route';
import { inject } from '@ember/service';
export default Route.extend({
  session: inject(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function() {
      this.get('session').open('firebase', { provider: 'google'});
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
