<template id="main">
  <v-ons-navigator swipeable
    :page-stack="pageStack"
    @push-page="pageStack.push($event)"
  ></v-ons-navigator>
</template>

<script>
    import HomePage from './components/HomePage';

    export default {
        name: 'Stack',

        components: {
            HomePage
        },

        data() {
            return {
                pageStack: [ HomePage ]
            }
        }
    }
</script>
