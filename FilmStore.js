import { types, onSnapshot, flow } from 'mobx-state-tree'
// import { observable } from 'mobx'

export const Film = types.model('Film', {
  id: types.string,
  project_id: types.string,
  creator_id: types.string,
  elevator_pitch: types.string,
  app_instance_id: types.string,
  title: types.string,
  music_artist_title: types.optional(types.string, ''),
  project_lead: types.string,
  video_link: types.string,
  image_url: types.string,
  genre_name: types.string,
  bitly_url: types.string,
  topic_names: types.string,
  video_views: types.string,
  trending: types.string
})

const FilmStore = types.model('FilmStore', {
  films: types.array(types.frozen),
  isFetching: types.boolean
})
  .actions(self => ({
    fetchFilms: flow(function * (url) {
      try {
        self.isFetching = true
        const response = yield fetch(url)
        const responseJson = yield response.json()
        self.films = responseJson.results
        self.isFetching = false
      } catch (error) {
        console.error(error)
      }
    }),
    clearFilms () {
      self.films = []
    }
  }))
  .create({
    films: [],
    isFetching: true
  })

export default FilmStore
