<template>
	<div class="dash">
		<v-row>
			<v-hover v-slot:default="{ hover }">
				<v-card class="ml-8 friendsCard" :elevation="hover ? 8 : 2">
					<v-card-text class="font-weight-medium text-center title">{{
						titles.friends
					}}</v-card-text>
					<v-divider></v-divider>
					<div class="cardContent">
					<v-list :two-line="twoLine" :flat="flat" :avatar="avatar">
						<v-list-item
							v-for="(friend, i) in friendsList"
							:key="i"
						>
							<FriendItem :friend="friend" />
						</v-list-item>
						<v-list-item key="more">
							<div class="more">
								<div class="button-title">{{ moreTitle }}</div>
							</div>
						</v-list-item>
					</v-list>
					</div>
				</v-card>
			</v-hover>

			<v-hover v-slot:default="{ hover }">
				<v-card class="mr-8 card" :elevation="hover ? 8 : 2">
					<v-card-text class="font-weight-medium text-center title">{{
						titles.rateSongs
					}}</v-card-text>
					<v-divider></v-divider>
					<div class="cardContent">
					<v-list :two-line="twoLine" :flat="flat" :avatar="avatar">
						<v-list-item
							v-for="(song, i) in songs"
							:key="i"
						>
							<RateSong :song="song" />
						</v-list-item>
						<v-list-item key="more">
							<div class="more">
								<div class="button-title">{{ moreTitle }}</div>
							</div>
						</v-list-item>
					</v-list>
					</div>
				</v-card>
			</v-hover>
		</v-row>
	</div>
</template>
<script>
import FriendItem from "./components/friendItem/FriendItem.vue";
import RateSong from "./components/rateSongItem/RateSong.vue";
import friends, {songs} from "./mockData";
export default {
	data: function() {
		return {
			titles: {
				friends: "Przyjaciele",
				rateSongs: "Oceń piosenki"
			},
			friendsList: friends,
			songs,
			avatar: true,
			flat: true,
			twoLine: true,
			musicNote: "♫ ",
			moreTitle: "Zobacz więcej",
			moreIcon: "$vuetify.icons.more"
		};
	},
	computed: {
		last3Friends: function() {
			return this.friendsList.slice(0, 3);
		}
	},
	components: {
		FriendItem,
		RateSong
	}
};
</script>
<style src="./DashboardStyle.css" />
