<template>
        <v-ons-page>
            <v-ons-toolbar modifier="transparent"></v-ons-toolbar>
            <v-ons-list>
                <v-ons-list-item v-for="item in items" :key="item.name">
                    <a @click="navig(item.name)">{{ item.name }}</a>
                </v-ons-list-item>
            </v-ons-list>
        </v-ons-page>
</template>

<script>
    import HomePage from './HomePage'
    export default {
        name: 'listMenu',
        data() {
            return {

                items: [
                    {name: 'Home'},
                    {name: 'Geolocalisation'},
                    {name: 'Camera'}
                ]
            }
        },
        methods: {

            navig (item) {

                this.$router.push({ name: item})
                this.$store.commit('splitter/toggle')
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

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        text-align: center;
        margin-bottom: 20px;
    }

    img {
        max-width: 150px;
    }

    ons-list-title {
        text-transform: none;
    }

    ons-list-item {
        cursor: pointer;
    }
</style>
