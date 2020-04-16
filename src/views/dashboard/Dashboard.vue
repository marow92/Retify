<template>
    <div class="dash">
        <v-row>
            <v-hover v-slot:default="{ hover }">
                <v-card
                    class="ml-12"
                    :elevation="hover ? 8 : 2"
                    height="350"
                    width="350"
                    style="border-radius: 15px; background-color: #209EEF"
                >
                    <v-card-text class="font-weight-medium text-left title"
                        >Przyjaciele</v-card-text
                    >
                    <v-divider></v-divider>
                </v-card>
            </v-hover>

            <v-hover v-slot:default="{ hover }">
                <v-card
                    class="ml-6 card"
                    :elevation="hover ? 8 : 2"
                    height="350"
                    width="350"
                >
                    <v-card-text class="font-weight-medium text-left title">
                        Sekcja
                    </v-card-text>
                    <v-divider></v-divider>
                </v-card>
            </v-hover>
        </v-row>
    </div>
</template>
<script scr="./DashboardScript.js" />
<style src="./DashboardStyle.css" />
