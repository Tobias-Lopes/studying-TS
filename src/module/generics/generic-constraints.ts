export const bootstrap = (): void => {
  function speakText(text: string): void {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    window.speechSynthesis.speak(utterance);
  }

  type ElementForReading<T> = { text: string; element: T };

  function extractHTMLElementText<T extends HTMLElement>(
    element: T,
  ): ElementForReading<T> | null {
    const text = element.innerText;

    if (!text) {
      console.error('Elemento não possui texto para ser lido');
      return null;
    }
    return { text, element };
  }

  const element1 = document.getElementById('course'); //HTMLElement | null
  const element2 = document.querySelector('a'); //HTMLAnchorElement | null

  document.getElementById('play')?.addEventListener('click', () => {
    if (element1) {
      const el = extractHTMLElementText(element1);
      if (el) {
        speakText(el.text);
        el.element.style.backgroundColor = 'green';
      }
    }

    //speakText('Uma string qualquer para ser lida');
  });
};
