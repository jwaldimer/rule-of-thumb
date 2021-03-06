import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('public', { path: '/' }, function () {
    this.route('main', { path: '/' });
    this.route('how-it-works');
    this.route('past-trials');
    this.route('contact');
    this.route('policy');
    this.route('terms');
  });
});
