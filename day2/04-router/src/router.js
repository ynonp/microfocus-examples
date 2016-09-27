import HomePage from 'pages/home';
import AboutPage from 'pages/about';
import FindYouPage from 'pages/findyou';

export default class Router {
  constructor (el) {
    this.pages = {
      home: HomePage,
      about: AboutPage,
      findyou: FindYouPage,
    };
    this.el = el;
    this.showPageFromHash();
    window.addEventListener('hashchange', this.showPageFromHash.bind(this));
  }

  showPageFromHash () {
    if (window.location.hash.length > 0) {
      this.show(window.location.hash.substr(1));
    } else {
      this.show('home');
    }
  }

  show (pageName) {
    if (this.currentPage && (typeof this.currentPage.onLeave === 'function')) {
      this.currentPage.onLeave();
    }
    const page = this.pages[pageName];
    if (typeof page === 'function') {
      this.currentPage = new this.pages[pageName]();
    } else {
      this.currentPage = page;
    }

    if (typeof this.currentPage.onEnter === 'function') {
      const enterTask = this.currentPage.onEnter();
      if (enterTask && typeof enterTask.then === 'function') {
        // enter returned a promise so better wait for it
        this.el.innerHTML = '<p>Loading, please wait...</p>';
        enterTask.then(this._showNextPage.bind(this));
      } else {
        this._showNextPage();
      }
    }
  }

  _showNextPage () {
    this.el.innerHTML = '';
    this.el.appendChild(this.currentPage.el);
  }
}

