import { types, onSnapshot, flow } from 'mobx-state-tree'
// import { observable } from 'mobx'

const OtherVideos = types.model('OtherVideos', {
  project_id: types.optional(types.string, ''),
  music_artist_title: types.optional(types.string, ''),
  topic_names: types.optional(types.array(types.string), []),
  video_views: types.optional(types.string, '')
})

const CommunityVideos = types.model('CommunityVideos', {
  is_awarded: types.optional(types.string, ''),
  in_top20perc: types.optional(types.string, ''),
  in_top50perc: types.optional(types.string, ''),
  cycle_type: types.optional(types.string, ''),
  cycle_name: types.optional(types.string, ''),
  cycle_type_name: types.optional(types.string, ''),
  topic_names: types.frozen,
  project_result: types.optional(types.string, '')
})

const Film = types.model('Film', {
  id: types.optional(types.string, ''),
  creator_id: types.optional(types.string, ''),
  elevator_pitch: types.optional(types.string, ''),
  app_instance_id: types.optional(types.string, ''),
  title: types.optional(types.string, ''),
  project_lead: types.optional(types.string, ''),
  video_link: types.optional(types.string, ''),
  image_url: types.optional(types.string, ''),
  genre_name: types.optional(types.string, ''),
  bitly_url: types.optional(types.string, ''),
  trending: types.optional(types.string, '')
})

const Community = types.compose(CommunityVideos, Film)
const Other = types.compose(OtherVideos, Film)

const FilmStore = types.model('FilmStore', {
  communityFilms: types.array(Community),
  otherFilms: types.array(Other),
  isFetching: types.boolean
})
  .actions(self => ({
    fetchFilms: flow(function * (url, edition) {
      try {
        self.isFetching = true
        const response = yield fetch(url)
        const responseJson = yield response.json()
        edition === 'Community Videos'
          ? self.communityFilms = responseJson.results
          : self.otherFilms = responseJson.results
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
    communityFilms: [],
    otherFilms: [],
    isFetching: true
  })

export default FilmStore
