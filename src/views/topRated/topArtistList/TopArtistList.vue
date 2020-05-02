<template>
	<div class="topArtists">
		<v-list flat>
			<v-list-item v-for="(artist, i) in artists" :key="i">
				<TopArtistItem :artist="artist" />
			</v-list-item>
			<v-list-item>
				<MoreButton :title="titles.more" :onClick="onArtistClick" />
			</v-list-item>
		</v-list>
	</div>
</template>
<script src="./TopArtistListScript.js"></script>
<style src="./TopArtistListStyle.css" />