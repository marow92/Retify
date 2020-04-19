<template>
	<v-hover v-slot:default="{ hover }">
		<v-card class="ml-8" :elevation="hover ? 8 : 2">
			<v-card-text class="font-weight-medium text-center title">
				{{ cardTitle }}
			</v-card-text>
			<v-divider></v-divider>
			<div class="cardContent">
				<slot />
			</div>
		</v-card>
	</v-hover>
</template>
<script src="./CardScript.js" />
