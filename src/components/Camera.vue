<template>
    <v-ons-page>
        <v-ons-toolbar class="home-toolbar mytool">
            <div class="left">
                <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
                    <v-ons-icon icon="ion-navicon, material:md-menu" class="icone"></v-ons-icon>
                </v-ons-toolbar-button>
            </div>
        </v-ons-toolbar>
        <button id="cameraTakePicture">TAKE PICTURE</button>
        <img id="myImage"/>
    </v-ons-page>

</template>

<script>
    export default {
        name: "Camera",
        mounted() {

            document.addEventListener("deviceready", onDeviceReady, false);

            function onDeviceReady() {

                let button = document.getElementById('cameraTakePicture');
                button.addEventListener('click', function () {

                    navigator.camera.getPicture(onSuccess, onFail, {
                        quality: 25,
                        destinationType: Camera.DestinationType.DATA_URL
                    });

                    function onSuccess(imageData) {
                        let image = document.getElementById('myImage');
                        image.src = "data:image/jpeg;base64," + imageData;
                    }

                    function onFail(message) {
                        alert('Failed because: ' + message);
                    }

                })

            }


        },
        methods: {

        }
    }
</script>

<style scoped>
    

</style>