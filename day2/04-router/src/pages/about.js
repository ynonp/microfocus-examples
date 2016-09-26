class AboutPage {
  constructor () {
    this.count = 0;
  }

  initDOM (el) {
    el.innerHTML = `
    <p>About Us</p>
    <a href="#">Home Page</a>
    <span class="visits">${this.count}</span>
    `;
    this.el = el;
  }

  onEnter (el) {
    this.count += 1;
    this.initDOM(el);
  }
}

const thePage = new AboutPage();
export default thePage;


