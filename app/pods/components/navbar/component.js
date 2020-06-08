import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    });
  }
})