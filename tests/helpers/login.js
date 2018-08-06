import { authenticateSession } from 'ember-simple-auth/test-support';

export function logUser() {
  return authenticateSession({
    profile: { email: 'mirage@fake.do' }
  });
}
