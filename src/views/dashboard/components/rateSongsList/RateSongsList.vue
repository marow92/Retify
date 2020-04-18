<template>
	<v-list :two-line="twoLine" :flat="flat" :avatar="avatar">
		<v-list-item v-for="(song, i) in songsList" :key="i">
			<RateSong :song="song" />
		</v-list-item>
		<v-list-item>
			<MoreButton :title="titles.more" onClick="" />
		</v-list-item>
	</v-list>
</template>
<script src="./RateSongsListScript.js"></script>