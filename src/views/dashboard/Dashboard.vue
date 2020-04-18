<template>
	<div class="dash">
		<v-row>
			<Card class="friendsCard" :cardTitle="titles.friends">
				<FriendsList
					:friendsList="friends"
					:onFriend="onFriend"
					:onMoreFriends="onMoreFriends"
				/>
			</Card>

			<Card :cardTitle="titles.rateSongs" class="card">
				<RateSongsList
					:songsList="songs"
					:onSongRated="onSongRated"
					:onMoreSongs="onMoreSongs"
				/>
			</Card>
		</v-row>
	</div>
</template>
<script src="./DashboardScript.js"></script>
<style src="./DashboardStyle.css" />
