'use strict';

module.exports = function(environment) {
  let ENV = {
    'ember-simple-auth': {
      authenticationRoute: 'login',
      auth0: {
        clientID: 'SiaA4t5HMsDfXEpI7zodXoE7qx00vI4R',
        domain: 'coolwriter.eu.auth0.com',
        logoutReturnToURL: '/'
      }
    },
    firebase: {
      apiKey: "AIzaSyBtASgBSgoXBkUPs7G9GhBlEV-47TnG9Fo",
      authDomain: "coolwriter-3e7a6.firebaseapp.com",
      databaseURL: "https://coolwriter-3e7a6.firebaseio.com",
      projectId: "coolwriter-3e7a6",
      storageBucket: "coolwriter-3e7a6.appspot.com",
      messagingSenderId: "558808038143"
    },
    torii: {
      sessionServiceName: 'session'
    },
    i18n: {
      defaultLocale: 'pl'
    },
    modulePrefix: 'coolwriter',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    //dodalem to
    ENV['ember-cli-mirage'] = {
      enabled: true
    };

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
