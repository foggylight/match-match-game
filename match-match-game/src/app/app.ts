import Header from './layout/header';
import PageContent from './layout/pageContent';

import state from './state';
import DataBase from './db';

export default class App {
  private header: Header;

  private content: PageContent;

  dataBase: DataBase;

  constructor(private readonly rootNode: HTMLElement) {
    state.router.currentRoute = `/${window.location.hash.slice(1)}`;
    this.enableRouteChange();

    this.dataBase = new DataBase();

    this.header = new Header(this.rootNode);
    this.content = new PageContent(this.rootNode, this.dataBase);
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      state.router.currentRoute = `/${hash}`;
      this.render();
    });
  }

  public render(): void {
    this.header.render();
    this.content.render();
  }
}
