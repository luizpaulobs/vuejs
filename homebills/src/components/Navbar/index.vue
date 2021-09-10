<template>
    <div>
      <v-list-item class="black">
        <v-list-item-content>
          <v-list-item-title class="title">
            <p class="text-center white--text mt-4 ">Menu</p>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      
      <v-list-group no-action :value="true" class="black">
            <template v-slot:activator>
              <v-list>
                  <v-list-item-title class="title white--text">
                      <v-icon>mdi-cash-plus</v-icon>
                      Cadastro</v-list-item-title>
              </v-list>
           </template>   
           <v-list-item
            color="white"
            class="px-2 ml-5"
            v-for="cadastro in cadastros"
            :key="cadastro.text"
            router
            :to="cadastro.route"
           >
                <v-list-item-icon>
                    <v-icon class="white--text">{{ cadastro.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title :class="cadastro.class">
                        {{ cadastro.text }}
                    </v-list-item-title>
                </v-list-item-content>
           </v-list-item>
      </v-list-group>

    </div>  
</template>

<script>
import { cadastros } from "./cadastros";

export default {
    data: () => ({
        cadastros,
    }),

}
</script>

<style>

</style>