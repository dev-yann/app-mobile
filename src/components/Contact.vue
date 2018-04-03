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
                <p>Envoyez moi un mail :</p>
            </v-ons-col>
        </v-ons-row>
    </v-ons-page>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

    p {
        padding: 20px;
        text-align: center;
    }

</style>