<template>
	<div class="rateList">
		<v-list width="65%" height="100%">
			<v-list-item v-for="(song, i) in songs" :key="i">
				<RateSong :song="song" />
			</v-list-item>
			<v-list-item>
				<MoreButton :title="titles.more" :onClick="onMoreSongs" />
			</v-list-item>
		</v-list>
	</div>
</template>
<script src="./RateSongListScript.js"></script>
<style src="./RateSongListStyle.css" />
