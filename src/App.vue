<template>
  <v-app>
    <v-content fill-height>
      <v-container fluid ma-0 pa-0 fill-height>
        <v-layout row fill-height>
          <v-flex lg7 fill-height>
            <v-card dark color="primary" height="100%">
              <v-img
                src="https://cdn.mos.cms.futurecdn.net/FUCaUWjnxVNkHrpZMwerSY-1200-80.jpg"
                height="100%"
              ></v-img>
            </v-card>
          </v-flex>
          <v-flex lg5 fill-height align-center>
            <v-container class="fill-height" fluid ma-0 pa-10>
              <v-row>
                <v-col>
                  <v-card class="elevation-12">
                    <v-toolbar color="orange" dark flat>
                      <v-toolbar-title>Sign in</v-toolbar-title>
                      <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                      <v-form>
                        <v-text-field label="Login" name="login" type="text"></v-text-field>
                        <v-text-field
                          id="password"
                          label="Password"
                          name="password"
                          type="password"
                        ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="orange">Login</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-flex>
          <!-- <v-col align-self="end" fill-height></v-col>
            <v-col align-center justify-center mt-10>
              <v-card class="elevation-12" align-center justify-center>
                <v-toolbar color="orange" dark flat>
                  <v-toolbar-title>Sign in</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field label="Login" name="login" type="text"></v-text-field>
                    <v-text-field id="password" label="Password" name="password" type="password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="orange">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          <v-col align-self="end" fill-height></v-col>-->
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>