class AboutPage {
  constructor () {
    this.count = 0;
    this.el = document.createElement('div');
  }

  initDOM (el) {
    el.innerHTML = `
    <p>About Us</p>
    <a href="#">Home Page</a>
    <span class="visits">${this.count}</span>
    `;
    this.el = el;
  }

  onEnter () {
    this.count += 1;
    this.initDOM(this.el);
  }
}

const thePage = new AboutPage();
export default thePage;


