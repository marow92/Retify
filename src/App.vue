<template>
    <v-app style="background-color: #58ACE5;">
        <notification-component />
        <navigation-bar />

        <v-content>
            <v-container fluid>
                <div id="app">
                    <div id="nav"></div>
                </div>
            </v-container>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>