const initialState = {
  films: []
}

const reduceFilms = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FILMS':
      return Object.assign({}, state, {
        films: action.films
      })
    default:
      return state
  }
}

export default reduceFilms
