import { types, onSnapshot, flow } from 'mobx-state-tree'
// import { observable } from 'mobx'

export const Film = types.model('Film', {
  id: types.string,
  project_id: types.string,
  creator_id: types.string,
  elevator_pitch: types.string,
  app_instance_id: types.string,
  title: types.string,
  music_artist_title: types.string,
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
  films: types.array(types.frozen)
})
  .actions(self => ({
    fetchFilms: flow(function * (url) {
      try {
        const response = yield fetch(url)
        const responseJson = yield response.json()
        self.films = responseJson.results
      } catch (error) {
        console.error(error)
      }
    }),
    clearFilms () {
      self.films = []
    }
  }))
  .create({
    films: []
  })

export default FilmStore
