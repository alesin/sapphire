<template>
  <v-toolbar
    fixed
    flat
    app
    dense
    clipped-left
    color="white"
    style="padding-left:0px"
    :scroll-off-screen="true"
    :scroll-threshold="77"
  >
    <v-toolbar-side-icon
      @click="SET_DRAWER(!drawer)"
    >
      <v-icon
        medium
        color="grey darken-1"
      >
        $vuetify.icons.menu
      </v-icon>
    </v-toolbar-side-icon>
    <v-spacer />

    <template>
      <v-toolbar-items>
        <div class="text-xs-center toolbar-items">
          <v-btn
            icon
            @click="$emit('show-ruby-store-modal');"
          >
            <v-badge
              id="ruby_total_span"
              color="primary"
              class="right inline"
            >
              <span slot="badge">{{ rubies }}</span>
              <v-icon
                medium
                color="primary"
              >
                $vuetify.icons.ruby
              </v-icon>
            </v-badge>
          </v-btn>

          <v-btn
            icon
            @click="$emit('show-notification-feed');"
          >
            <v-badge
              color="primary"
              class="right overlap"
            >
              <template v-if="notifications && notifications > 0">
                <span slot="badge">{{ notifications }}</span>
              </template>
              <v-icon
                medium
                color="grey darken-1"
              >
                $vuetify.icons.notifications
              </v-icon>
            </v-badge>
          </v-btn>
        </div>
      </v-toolbar-items>
    </template>
  </v-toolbar>
</template>

<script>
// *** Utilities
import { mapState, mapMutations, mapActions } from 'vuex';
// import { SET_DRAWER } from '../../store/modules/app/consts';

export default {
  name: 'MenuBar',
  components: {},
  // props: ['notificationCount', 'parentIsMobile'],
  data: () => ({}),
  computed: {
    // ...mapState(['drawer']),
    ...mapState(['notifications', 'rubies']),
    // ...mapState('theUser', {
    //   notifications: state => state.notifications,
    //   rubies: state => state.rubies,
    // }),
    // ...mapState('app', {
    //   drawer: state => state.drawer,
    // }),
  },
  mounted() {},
  methods: {
    // ...mapMutations('app', [SET_DRAWER]),
    ...mapMutations(['SET_DRAWER']),
  },
};
</script>
