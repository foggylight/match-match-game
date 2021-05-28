export interface Component {
  render(): void;
}

export interface View {
  path: string;
  init(): void;
}

export interface StateObj {
  router: {
    routes: [{ path: string; view: View }?];
    root: string;
    currentRoute: string;
  };
  user: {
    name: string | null;
    email: string | null;
  };
  bestPlayers: [{ name: string; email: string; score: number }?];
  settings: {
    cardsType: string | null;
    difficulty: string | null;
  };
  game: {
    time: number | null;
    mistakes: number | null;
    comparisons: number | null;
  };
}
