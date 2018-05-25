// export const addFilms = films => ({
//   type: 'ADD_FILMS',
//   films
// })

export function addFilms(films) {
  return {
    type: 'ADD_FILMS',
    films
  }
}
