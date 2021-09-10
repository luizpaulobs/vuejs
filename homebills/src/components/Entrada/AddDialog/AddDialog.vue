<template>
  <v-dialog
    max-width="800px"
    v-model="this.component.addDialog"
    dark
    persistent
  >
    <v-card>
    <v-card-title>Adicionar Item</v-card-title>
    <v-card-text>
        <v-row>
            <v-col cols="4">
                <v-text-field
                    outlined
                    label="ID"
                    type="date"
                    v-model="component.itens.date"
                ></v-text-field>
            </v-col>
            <v-col cols="8">
                <v-text-field
                    outlined
                    label="Nome"
                    v-model="component.itens.name"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="9">
                <v-text-field
                    outlined
                    label="Descrição"
                    v-model="component.itens.description"
                ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field
                    outlined
                    label="Valor"
                    prefix="R$"
                    v-model="component.itens.valor"
                ></v-text-field>
            </v-col>
        </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn
        class="error mr-2 mt-2"
        rounded
        @click="component.cancel()"
    >Cancelar</v-btn>
    <v-btn
        class="primary mr-4 mt-2"
        rounded
        @click="component.submit()"
    >Salvar</v-btn>
    </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    props:{
        component: Object,
    },

   
    created(){
        console.log(this.component.edit);
        if(this.component.edit == 2){
            this.component.itens = {...this.component.itemtoUpdate};
            this.component.itens.date = this.component.itens.date.split("/").reverse().join("-")    
            console.log(this.component.itens, 876);
        }
        //this.component.itemtoUpdate = {}    
    }
    
}
</script>

<style>

</style>