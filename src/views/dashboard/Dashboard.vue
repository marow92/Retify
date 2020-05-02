<template>
	<div class="dash">
		<v-row>
			<Card class="friendsCard" :cardTitle="titles.friends">
				<FriendList :friends="friends" :onFriend="onFriend" />
			</Card>

			<Card class="rateCard" :cardTitle="titles.rateSongs">
				<RateSongList
					:songs="songs"
					:onSongRated="onSongRated"
					:onMoreSongs="onMoreSongs"
				/>
			</Card>
		</v-row>
	</div>
</template>
<script src="./DashboardScript.js"></script>
<style src="./DashboardStyle.css" />
