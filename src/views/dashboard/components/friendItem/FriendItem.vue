<template>
	<div class="friend">
		<v-list-item-avatar>
			<v-img :src="friend.avatar"></v-img>
		</v-list-item-avatar>
		<v-list-item-content class="text-left">
			<v-list-item-title v-html="friend.name" />
			<v-list-item-subtitle
				v-if="friend.nowListening"
				v-html="musicNote + friend.nowListening"
			/>
		</v-list-item-content>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			twoLine: true,
			musicNote: "♫ ",
			moreTitle: "Zobacz więcej",
			moreIcon: "$vuetify.icons.more"
		};
	},
	props: {
		friend: Object
	},
	computed: {
		last3Friends: function() {
			return this.friendsList.slice(0, 3);
		}
	}
};
</script>