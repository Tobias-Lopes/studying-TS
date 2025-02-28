export const bootstrap = (): void => {
  type Methods = 'GET' | 'POST' | 'DELETE';
  class FormHandler {
    createForm(): HTMLFormElement;
    createForm(inputs: string[]): HTMLFormElement;
    createForm(
      inputs: string[],
      action: string,
      method: Methods,
    ): HTMLFormElement;
    createForm(
      inputs?: string[],
      action?: string,
      method?: Methods,
    ): HTMLFormElement {
      const form = document.createElement('form');

      if (action) form.setAttribute('action', action);
      if (method) form.setAttribute('method', method);

      if (inputs && inputs.length > 0) {
        inputs.map((value) => {
          const input = document.createElement('input');
          input.setAttribute('type', 'text');
          input.setAttribute('placeholder', value);

          form.appendChild(input);
        });
      }

      document.body.appendChild(form);

      return form;
    }
  }

  const form = new FormHandler();
  form.createForm();
  form.createForm(['Nome', 'Apelido']);
  form.createForm(['Nome', 'Apelido'], '/product', 'POST');
};
