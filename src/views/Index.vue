<template>
  <div class="page-content">
    <h2 class="page-title">
      {{ title }}
    </h2>
    <!-- //? FEED: Using Vuex Store -->
    <feed :feed="feed" />
  </div>
</template>

<script>
// import api from '@API';
import { mapActions, mapState } from 'vuex';

import Feed from '@Component/Index/Feed.vue';

import './Index.scss';

export default {
  name: 'Index',
  components: {
    Feed,
  },
  data() {
    return {
      title: 'Index page !',
    };
  },
  computed: {
    ...mapState({
      feed: state => state.feed,
    }),
  },
  created() {
    // api
    //   .get(`http://jsonplaceholder.typicode.com/posts`)
    //   .then(response => {
    //     this.articles = response.data;
    //   })
    //   .catch(e => {
    //     console.error(e);
    //   });
    this.getFeed();
  },
  methods: {
    ...mapActions({
      getFeed: 'GET_FEED',
    }),
  },
};
</script>
