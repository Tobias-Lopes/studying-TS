export const bootstrap = (): void => {
  const movies = ['Dragon ball', 'Pokemon', 'Naruto'];

  const movie = movies.find((item) => item.includes('Pokemon'));

  //type guard
  if (movie) {
    console.log(movie);
  } else {
    console.log('Filme nãp localizado');
  }

  // falsy
  console.log(false ? 'truthy' : 'falsy');
  console.log(0 ? 'truthy' : 'falsy');
  //console.log('' ? 'truthy' : 'falsy');
  //console.log(null ? 'truthy' : 'falsy');
  //console.log(undefined ? 'truthy' : 'falsy');
  console.log(NaN ? 'truthy' : 'falsy');

  //truthy
  console.log(true ? 'truthy' : 'falsy');
  console.log(-1 ? 'truthy' : 'falsy');
  //console.log(' ' ? 'truthy' : 'falsy');
  //console.log([] ? 'truthy' : 'falsy');
  //console.log({} ? 'truthy' : 'falsy');
};
