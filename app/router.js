import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('books', function() {
    this.route('new');
    this.route('book', { path: '/:book_id' }, function() {
      this.route('edit');
      this.route('pages', function() {
        this.route('new');
        this.route('page', { path: '/:page_id' }, function() {
          this.route('edit');
        });
      });
    });
  });
  this.route('users');
});

export default Router;
