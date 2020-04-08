<template>
  <div class="dash" style="margin-left: 120px; ">
    <v-row>
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="ml-12"
          :elevation="hover ? 8 : 2"
          height="350"
          width="350"
          style="border-radius: 15px"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">Przyjaciele</v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-hover>

      <v-hover v-slot:default="{ hover }">
        <v-card
          class="ml-6"
          :elevation="hover ? 8 : 2"
          height="350"
          width="350"
          style="border-radius: 15px;"
        >
          <v-card-text
            class="font-weight-medium mt-12 text-center subtitle-1"
          >Sekcja</v-card-text>
           <v-divider></v-divider>
        </v-card>
      </v-hover>
    </v-row>
  </div>
</template>