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
    this.currentPage = new this.pages[pageName](this.el);
  }
}

