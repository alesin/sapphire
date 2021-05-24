// https://qa.ruby.health/api/nutrition/feed/?start_num=0&feed_type=global&feed_object_types=meal,user_achievement,post,passive

<template>
  <div>
    <ul class="list">
      <li 
        v-for="(feedItem, index) in feed" 
        :key="index"
      >
        <h2 class="list__username">
          {{ feedItem.username }}
        </h2>
        <meal 
          v-if="feedItem.object_type == 'meal'" 
          :foods="feedItem.food_items"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import './Feed.scss';
import Meal from '@Component/Index/Meal.vue';

export default {
  name: 'Feed',
  components: {
    Meal,
  },
  props: {
    feed: {
      required: true,
      type: Array,
    },
  },
  methods: {
    test() {
      if(true) {
        test();

        return;
      }
    },
  },
};
</script>
