//type predicate
export function isGameArray(data: any): data is Game[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item.id === 'number' &&
        typeof item.title === 'string' &&
        typeof item.genre === 'string' &&
        typeof item.year === 'number',
    )
  );
}

export function isCarArray(data: any): data is Car[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item.id === 'number' &&
        typeof item.brand === 'string' &&
        typeof item.model === 'string' &&
        typeof item.year === 'number' &&
        typeof item.type === 'string' &&
        typeof item.engine === 'string',
    )
  );
}
