<template>
	<div class="rateSongItem">
		<v-list-item-avatar>
			<v-icon>$vuetify.icons.song</v-icon>
		</v-list-item-avatar>
		<v-list-item-content class="text-left">
			<v-list-item-title v-html="song.title" />
			<v-list-item-subtitle v-html="song.author" />
		</v-list-item-content>
		<div>
			<v-rating
				v-model="song.rate"
				:length="length"
				:empty-icon="emptyIcon"
				:full-icon="fullIcon"
				:half-icon="halfIcon"
				:half-increments="halfIncrements"
				:hover="hover"
				:readonly="readonly"
				:size="size"
				:dense="dense"
				:color="color"
				:background-color="bgColor"
			></v-rating>
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			twoLine: true,
			musicNote: "♫ ",
			moreTitle: "Zobacz więcej",
			moreIcon: "$vuetify.icons.more",
			emptyIcon: "mdi-heart-outline",
			fullIcon: "mdi-heart",
			halfIcon: "mdi-heart-half-full",
			halfIncrements: false,
			hover: true,
			length: 5,
			rating: 0,
			readonly: false,
			small: true,
			size: 15,
			dense: false,
			color: "red lighten-1",
			bgColor: "red lighten-3"
		};
	},
	props: {
		song: Object
	},
	computed: {
		last3Friends: function() {
			return this.friendsList.slice(0, 3);
		}
	}
};
</script>