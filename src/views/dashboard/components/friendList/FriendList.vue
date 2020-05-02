<template>
	<div class="friendList">
		<v-list width="85%" height="100%">
			<v-list-item v-for="(friend, i) in friends" :key="i">
				<FriendItem :friend="friend" />
			</v-list-item>
			<v-list-item> </v-list-item>
		</v-list>
	</div>
</template>
<script src="./FriendListScript.js"></script>
<style src="./FriendListStyle.css"/>
