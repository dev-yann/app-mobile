<template>
    <v-ons-page>
        <v-ons-row>
            <v-ons-col>
                <section>
                    <v-ons-button modifier="large" style="margin: 6px 0" id="cameraTakePicture">Prendre une photo</v-ons-button>
                </section>
                <section v-if="save">
                    <v-ons-button modifier="large" style="margin: 6px 0" @click="saving">Enregistrer la photo</v-ons-button>
                </section>
                <img id="myImage"/>
            </v-ons-col>
        </v-ons-row>
    </v-ons-page>
</template>

<script>
    export default {
        data () {
            return {

                save: false,
                image: ''
            }
        },
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
                        this.save = true
                        this.image = imageData
                    }

                    function onFail(message) {
                        alert('Failed because: ' + message);
                    }

                })

            }
        },
        methods:{
            saving () {
                cordova.base64ToGallery(
                    this.image,

                    {
                        prefix: 'img_',
                        mediaScanner: true
                    },

                    function(path) {
                        alert(path);
                    },

                    function(err) {
                        alert(err);
                    }
                );
            }
        }
    }
</script>

<style scoped>

    #myImage{
        width: 100vw;
    }

    section{
        padding: 20px;
    }

</style>