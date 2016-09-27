export default class FindYouPage {
  constructor () {
    this.el = document.createElement('div');
  }

  onEnter () {
    const that = this;
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(
        that._setPosition.bind(that, resolve),
        that._showError.bind(that, reject));
    });
  }

  _setPosition (resolve, pos) {
    this.lat = pos.coords.latitude;
    this.long = pos.coords.longitude;

    this.el.innerHTML = `
    <p>${this.lat}, ${this.long}</p>
    `;
    resolve();
  }

  _showError (reject) {
    this.el.innerHTML = 'error...';
    reject();
  }
}



