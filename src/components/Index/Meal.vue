<template>
  <p class="list__meal">
    <span>Ate </span>
    <span
      v-for="(foodItem, index) in foods" 
      :key="index"
    >
      <span v-if="index === foods.length -1 && foods.length !== 1"> and</span>
      {{ foodItem.consumed_quantity }} {{ foodItem.consumed_unit }} {{ foodItem.food_name | handleCommas }}<span v-if="index < foods.length -1">,</span>
    </span><span>.</span>
  </p>
</template>

<script>
// import './Meal.scss';

export default {
  name: 'Meal',
  filters: {
    handleCommas(text) {
      if(!text || text.indexOf(',')===-1) {
        return text;
      }

      const commaText = text.split(',');
      
      return `${commaText[0]} (${commaText[1].trim()})`;
    },
  },
  props: {
    foods: {
      required: true,
      type: Array,
    },
  },
  computed: {},
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
