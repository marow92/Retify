<template>
	<v-list :two-line="twoLine" :flat="flat" :avatar="avatar">
		<v-list-item v-for="(friend, i) in friendsList" :key="i">
			<FriendItem :friend="friend" />
		</v-list-item>
		<v-list-item>
			<MoreButton :title="titles.more" onClick="" />
		</v-list-item>
	</v-list>
</template>
<script src="./FriendsListScript.js"></script>