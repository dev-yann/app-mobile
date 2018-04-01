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
                <h1>Géolocalisation</h1>
                <p>Pour fonctionner ce service à besoin d'une connexion internet et des inforamtions de localisation activées sur votre téléphone</p>
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

                var onSuccess = function(position) {
                    alert('Latitude: '          + position.coords.latitude          + '\n' +
                        'Longitude: '         + position.coords.longitude         + '\n' +
                        'Altitude: '          + position.coords.altitude          + '\n' +
                        'Accuracy: '          + position.coords.accuracy          + '\n' +
                        'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                        'Heading: '           + position.coords.heading           + '\n' +
                        'Speed: '             + position.coords.speed             + '\n' +
                        'Timestamp: '         + position.timestamp                + '\n');
                };

                function onError(error) {
                    alert('code: '    + error.code    + '\n' +
                        'message: ' + error.message + '\n');
                }

                navigator.geolocation.getCurrentPosition(onSuccess, onError);
                //alert("navigator.geolocation works well");
            }

        }
    }
</script>

<style scoped>

</style>