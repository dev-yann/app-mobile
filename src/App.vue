<template>
    <v-ons-page id="app">
        <v-ons-splitter>
            <v-ons-splitter-side swipeable collapse width="250px"
                                 :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
                                 :open.sync="menuIsOpen">

                    <MenuPage></MenuPage>

            </v-ons-splitter-side>

            <v-ons-splitter-content class="content">
                    <v-ons-toolbar class="home-toolbar mytool">
                        <div class="left">
                            <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
                                <v-ons-icon icon="ion-navicon, material:md-menu" class="icone"></v-ons-icon>
                            </v-ons-toolbar-button>
                        </div>
                    </v-ons-toolbar>
                    <router-view class="myView"></router-view>
            </v-ons-splitter-content>
        </v-ons-splitter>
    </v-ons-page>
</template>

<script>
    import HomePage from './components/HomePage'
    import MenuPage from './components/MenuPage'

    export default {
        name: 'app',
        data() {
            return {

            }
        },
        computed: {
            menuIsOpen: {
                get() {
                    return this.$store.state.splitter.open
                },
                set(newValue) {
                    this.$store.commit('splitter/toggle', newValue)
                }
            }

        },
        components: {
            HomePage,
            MenuPage
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ons-splitter-side[side=left][animation=overlay] {
        border-right: 1px solid #BBB;
    }

    .mytool {
        background-color: #FF530D;
    }

    .icone {
        color: white;
    }
    .myView{
        margin-top: 44px;
    }

</style>
