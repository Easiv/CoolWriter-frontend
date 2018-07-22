import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.authenticatedRoute('page', function() {
    this.authenticatedRoute('new');
  });
  this.authenticatedRoute('books', function() {
    this.authenticatedRoute('new');
    this.authenticatedRoute('book', { path: '/:book_id' }, function() {
      this.authenticatedRoute('edit');
    });
  });
  this.authenticatedRoute('users');
});

export default Router;
