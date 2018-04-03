<template>
    <v-ons-page>
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
        props: ['pageStack', 'openMenu']
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


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

        text-align: center;
        padding: 20px;
    }
</style>
