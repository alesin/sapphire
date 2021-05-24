/* eslint-disable semi */
// ! Eventually replace with a real API call...
import response from '@Asset/placeholders/feed.js';

const debug = process.env.NODE_ENV !== 'production';

const storeConfig = {
  modules: {},
  getters: {},
  state: {
    feed: [],
  },
  mutations: {
    SET_FEED: (state, payload) => {
      console.log(`****** MUTATING STATE ******
      SET_FEED => `)
      console.log(payload)
      state.feed = payload
    },
  },
  actions: {
    GET_FEED: async({commit}) => {
      // let apiURL = '/api/nutrition/feed/?start_num=0&feed_type=global&feed_object_types=meal,user_achievement,post,passive'

      // commit(USER_REQUEST)

      try {
        // const { data } = await HTTP.get(apiUrl)
        // console.log(`****** STATE ACTION ******
        // GET_FEED => `, data)
        // commit(SET_FEED, data)
        // ? ******    Faux Data   ******
        // console.log(`****** STATE ACTION ******
        // GET_FEED => `)
        // console.log(response.data)
        commit('SET_FEED', response.data)
      } catch (error) {
        console.error('Uh oh, something went wrong getting the feed.', error);
      }
    },
  },
  strict: debug,
};

export default storeConfig;
