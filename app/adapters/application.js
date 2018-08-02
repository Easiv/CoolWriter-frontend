import FirebaseAdapter from 'emberfire/adapters/firebase';
import DS from 'ember-data'
import config from 'coolwriter/config/environment';

const { JSONAPIAdapter } = DS;

//let ApplicationAdapter = config.environment == 'test' ? JSONAPIAdapter : FirebaseAdapter;
 let ApplicationAdapter = FirebaseAdapter;
export default ApplicationAdapter.extend({
  namespace: '/api'
});
// if (config.environment == "test") {
//   ApplicationAdapter = JSONAPIAdapter.extend();
// }
// else {
//   ApplicationAdapter = DS.FirebaseAdapter.extend();
// }
//
//   ApplicationAdapter.reopen
//     namespace: 'api/v1'
//     host: 'http://localhost:3000'
//
// export default ApplicationAdapter
