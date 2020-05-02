<template>
	<div class="topSongs">
		<v-list>
			<v-list-item v-for="(song, i) in songs" :key="i">
				<TopSongItem :topSong="song" />
			</v-list-item>
			<v-list-item>
				<MoreButton :title="titles.more" :onClick="onMoreClick" />
			</v-list-item>
		</v-list>
	</div>
</template>
<script src="./TopSongListScript.js"></script>
<style src="./TopSongListStyle.css"/>