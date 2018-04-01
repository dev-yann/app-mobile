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
                <p>geo</p>
            </v-ons-col>
        </v-ons-row>
    </v-ons-page>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "Geo",
        data () {
            return {

            }
        },
        mounted () {


            document.addEventListener("deviceready", onDeviceReady, false);
            function onDeviceReady() {
                console.log("navigator.geolocation works well");
            }

        }
    }
</script>

<style scoped>

</style>