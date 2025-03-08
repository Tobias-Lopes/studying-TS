export const bootstrap = (): void => {
  interface TableProps {
    data: Game[];
    columns: Array<{
      header: string;
      accessor: (item: Game) => string | number;
    }>;
  }

  function creatTable({ data, columns }: TableProps): HTMLTableElement {
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

  const table = creatTable({
    data: games,
    columns: [
      { header: 'ID', accessor: (game: Game) => game.id },
      { header: 'Título', accessor: (game: Game) => game.title },
      { header: 'Preço', accessor: (game: Game) => game.price },
    ],
  });
  document.body.appendChild(table);
};
