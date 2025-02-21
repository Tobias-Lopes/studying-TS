export const bootstrap = (): void => {
  type Item = {
    id: string; //uuid
    [key: string]: string | null; //index signature
  };

  // fetch para um end-point de uma API
  const response: Item[] = [
    { id: 'nbvdfghjkmnbGH7656', movie: 'Cinderella Man' },
    { id: 'JghjH7765YHGTYUytyuj', song: 'Ideologia' },
    { id: 'HhgghTYT7I76567uhgU', song: 'Azul da Cor do Mar' },
  ];

  function showItem(items: Item[]): void {
    const body = document.querySelector('body');

    if (body instanceof HTMLBodyElement) {
      items.map((item) => {
        const itemElement = document.createElement('div');

        if ('song' in item) {
          itemElement.textContent = item.song;
          itemElement.style.background = 'seagreen';
        } else if ('movie' in item) {
          itemElement.textContent = item.movie;
          itemElement.style.background = 'cadetblue';
        }

        body.appendChild(itemElement);
      });
    }
  }

  showItem(response);
};
