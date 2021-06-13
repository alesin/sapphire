import Vue from 'vue';
import Vuetify from 'vuetify';
// import Vuetify from 'vuetify/lib'; //? requires styl loader?
import theme from './theme';
// import 'vuetify/dist/vuetify.min.css'; //^ currently using CDN
// TODO: proper installation via npm [https://v15.vuetifyjs.com/en/getting-started/quick-start#existing-applications]
// import '@mdi/font/css/materialdesignicons.css'; //^ currently using CDN
// TODO: proper installation via npm [https://vuetifyjs.com/en/features/icon-fonts/#installing-icon-fonts]
// import CameraPlus from '../icons/CameraPlus.vue';

Vue.use(Vuetify, {

  // #region ******* MDI (Material Design Icons)    ********
  // ^ Search for icon: [https://vuetifyjs.com/en/features/icon-fonts/#material-design-icons]
  iconfont: 'mdi',
  icons: {
    // ********     Menu    ****************
    notifications: 'mdi-bell-outline',
    ruby: 'mdi-diamond-stone',
    menu_more_vert: 'mdi-dots-vertical',
    menu: 'mdi-menu',
    close: 'mdi-close',
    add: 'mdi-plus',
    edit: 'mdi-pencil',
    copy: 'mdi-content-copy',
    delete: 'mdi-delete',
    add_a_photo: 'mdi-camera-plus',
    // post_comment_or_status: 'mdi-chat-plus',
    post_comment_or_status: 'mdi-comment-plus',
    // add_a_photo: {
    //   component: CameraPlus,
    // },
    track_food: 'mdi-silverware-fork-knife',
    track_weight: 'mdi-scale-bathroom',
    barcode_scanner: 'mdi-barcode-scan',
    fastfood: 'mdi-food', // "fastfood" in Material
    clipboard: 'mdi-clipboard-text', // "assignment" in Material
    mic: 'mdi-microphone',
    history: 'mdi-history',
    cached: 'mdi-cached',
    calendar: 'mdi-calendar',

    // ********     SETTINGS    ****************
    edit_circle: 'mdi-circle-edit-outline',

    // ********     MENUBAR DRAWER    ************
    settings: 'mdi-cog-outline',
    user_profile: 'mdi-account-circle',
    logout: 'mdi-logout-variant',
    add_circle_outline: 'mdi-plus-circle-outline', // TODO: too many different add icons?

    // ********     Status    ******************
    check_circle: 'mdi-check-circle',
    done: 'mdi-check',

    // ********    Navigation   **************
    arrow_back: 'mdi-arrow-left',
    chevron_back: 'mdi-chevron-left',
    // TODO: arrow_back_ios is larger...than chevron_back
    chevron_forward: 'mdi-chevron-right', // "arrow_forward_ios" in Material
    launch: 'mdi-launch',
    unfold_more: 'mdi-unfold-more-horizontal',
    user_home_inactive: 'mdi-account-outline',
    user_home_active: 'mdi-account',
    // TODO: find both inactive & active
    main_feed_inactive: 'mdi-account-multiple-outline',
    main_feed_active: 'mdi-account-multiple',
    nutrition_targets: 'mdi-bullseye-arrow',
    community_active: 'mdi-forum',
    community_inactive: 'mdi-forum-outline',

    // ********    User Interactions / Social   *************
    thumb_up_active: 'mdi-thumb-up',
    thumb_up_inactive: 'mdi-thumb-up-outline',
    love_active: 'mdi-heart',
    love_inactive: 'mdi-heart-outline',
    comment_active: 'mdi-comment',
    comment_inactive: 'mdi-comment-outline',
    send: 'mdi-send',

    // ********    RUBY STORE   *******************
    // TODO: update icons to match categories above
    ask_a_question: 'mdi-comment-question', // ask fitness experts
    macro_quick_track: 'mdi-chart-box-plus-outline', // quick macro track feature
    // ^ ALTERNATE icons: 'mdi-pencil-plus' || 'mdi-note-plus' || 'mdi-numeric-9-plus-box-multiple'

    // *** LOGIN    ****************************
    facebook: 'mdi-facebook',
    apple: 'mdi-apple',
    person: 'mdi-account',
    lock: 'mdi-lock',
    email: 'mdi-email',
    // #endregion

  },
  theme,
});
