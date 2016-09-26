import HomePage from 'pages/home';
import AboutPage from 'pages/about';

export default class Router {
  constructor (el) {
    this.pages = {
      home: HomePage,
      about: AboutPage,
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
      this.currentPage = new this.pages[pageName](this.el);
    } else {
      this.currentPage = page;
    }

    if (typeof this.currentPage.onEnter === 'function') {
      this.currentPage.onEnter(this.el);
    }
  }
}

