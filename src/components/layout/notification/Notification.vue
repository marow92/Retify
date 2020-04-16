<template>
    <v-alert
        v-if="isVisible"
        class="notification"
        :type="type"
        dismissible
        transition="slide-y-transition"
    >
        {{ message }}
    </v-alert>
</template>
<script src="./NotificationScript.js" />
<style src="./NotificationStyle.css"></style>
