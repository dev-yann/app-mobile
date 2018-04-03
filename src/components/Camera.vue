<template>
    <v-ons-page>
        <button id="cameraTakePicture">TAKE PICTURE</button>
        <img id="myImage"/>
    </v-ons-page>

</template>

<script>
    export default {
        name: "Camera",
        mounted() {

            /*document.addEventListener("deviceready", onDeviceReady, false);

            function onDeviceReady() {

                let button = document.getElementById('cameraTakePicture');
                button.addEventListener('click', function () {

                    navigator.camera.getPicture(onSuccess, onFail, {
                        quality: 25,
                        destinationType: Camera.DestinationType.DATA_URL
                    });

                    function onSuccess(imageData) {
                        var image = document.getElementById('myImage');
                        image.src = "data:image/jpeg;base64," + imageData;
                    }

                    function onFail(message) {
                        alert('Failed because: ' + message);
                    }

                })

            }*/


        },
        methods: {

        }
    }
</script>

<style scoped>


</style>