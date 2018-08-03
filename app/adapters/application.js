import FirebaseAdapter from 'emberfire/adapters/firebase';
import DS from 'ember-data';
import config from 'coolwriter/config/environment';

const { JSONAPIAdapter } = DS;

let ApplicationAdapter = config.environment == 'test' ? JSONAPIAdapter : FirebaseAdapter;

export default ApplicationAdapter.extend({
});
