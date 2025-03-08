export const bootstrap = (): void => {
  interface TablePropsInterface<T> {
    data: T[];
    columns: Array<{
      header: string;
      accessor: (item: T) => string | number;
    }>;
  }

  type TablePropsTypeAlias<T> = {
    data: T[];
    columns: Array<{
      header: string;
      accessor: (item: T) => string | number;
    }>;
  };

  function createTable<T>({
    data,
    columns,
  }: TablePropsInterface<T>): HTMLTableElement {
    const table = document.createElement('table');
    table.setAttribute('border', '1');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    columns.forEach((column) => {
      const th = document.createElement('th');
      th.textContent = column.header;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    data.forEach((item) => {
      const bodyRow = document.createElement('tr');
      columns.forEach((column) => {
        const td = document.createElement('td');
        td.textContent = String(column.accessor(item));
        bodyRow.appendChild(td);
      });

      tbody.appendChild(bodyRow);
    });

    table.appendChild(tbody);

    return table;
  }

  interface Game {
    id: string;
    title: string;
    price: number;
  }

  const games: Game[] = [
    { id: '1', title: 'Animal Well', price: 200 },
    { id: '2', title: 'Astro Bot', price: 150 },
  ];

  const table = createTable({
    data: games,
    columns: [
      { header: 'ID', accessor: (game: Game) => game.id },
      { header: 'Título', accessor: (game: Game) => game.title },
      { header: 'Preço', accessor: (game: Game) => game.price },
    ],
  });
  document.body.appendChild(table);

  //
  interface Movie {
    id: number;
    title: string;
    genre: string;
    year: number;
  }

  const movies: Movie[] = [
    { id: 1, title: 'Gladiador', genre: 'Drama, ação e aventura', year: 2000 },
    { id: 2, title: 'A Lista de Schindler', genre: 'Drama', year: 1993 },
  ];

  const tableMovies = createTable({
    data: movies,
    columns: [
      { header: 'ID', accessor: (movie: Movie) => movie.id },
      { header: 'Título', accessor: (movie: Movie) => movie.title },
      { header: 'Gênero', accessor: (movie: Movie) => movie.genre },
      { header: 'Ano', accessor: (movie: Movie) => movie.year },
    ],
  });
  document.body.appendChild(tableMovies);
};
