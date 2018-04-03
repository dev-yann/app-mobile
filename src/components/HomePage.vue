<template>
    <v-ons-page>
        <v-ons-toolbar class="home-toolbar mytool">
            <div class="left">
                <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
                    <v-ons-icon icon="ion-navicon, material:md-menu" class="icone"></v-ons-icon>
                </v-ons-toolbar-button>
            </div>
        </v-ons-toolbar>
        <v-ons-row>
            <v-ons-col>
                <p>Bienvenue sur mon application, vous pourrez trouvé quelques fonctionalitées qui utilisent les services de cordova</p>
            </v-ons-col>
        </v-ons-row>
    </v-ons-page>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                msg: ''
            }
        },
        methods: {
            goTo(url) {
                window.open(url, '_blank')
            }
        },
        props: ['pageStack', 'openMenu']
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        text-align: center;
    }

    img {
        max-width: 300px;
    }

    ons-list-title {
        text-transform: none;
    }

    ons-list-title:not(:first-of-type) {
        margin-top: 30px;
    }

    ons-card {
        text-align: center;
    }

    ons-list-item, ons-card {
        cursor: pointer;
    }

    .mytool {
        background-color: #FF530D;
    }

    .icone {
        color: white;
    }

    .entete {
        height: calc(100vh - 44px);
        color: black;
    }

    p {
        padding: 20px;
        text-align: center;
    }
</style>
