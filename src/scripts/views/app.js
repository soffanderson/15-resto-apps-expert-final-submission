import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const drawer = document.querySelector('#drawer');
    const checkbox = document.querySelector('#openMenu');
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 32 || e.keyCode === 13) {
        drawer.classList.toggle('open');
        if (checkbox.checked === true) {
          checkbox.checked = false;
        } else {
          checkbox.checked = true;
        }
      }
    });

    const skipLinkElem = document.querySelector('.skip-main');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main').focus();
    });
  }
}

export default App;
