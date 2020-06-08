import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this._calculateVH();

    window.addEventListener('resize', () => {
      this._calculateVH();
    });
  },

  _calculateVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
});