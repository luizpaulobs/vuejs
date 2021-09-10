<template>
  <div>
    <AddDialog v-if="addDialog" :component="this" /> 
  <v-data-table
    :headers="header"
    :items="results"
    class="elevation-1"
  >   
    <template v-slot:top>
    <v-toolbar flat>
      <v-toolbar-title>Entrada</v-toolbar-title>
      <v-divider
          class="mx-4"
          inset
          vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        class="mr-4"
        rounded
        @click="adicionar()"
      >Adicionar</v-btn>
    </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      
          <v-icon
            color="yellow darken-4"
            class="mr-2"
            @click="edit_addDialog(item)"
          >mdi-pencil</v-icon>   
          <v-icon
            color="red darken-4"
            class="mr-2"
            @click="deleteItem(item)"
          >mdi-delete</v-icon>
          
          
    </template>
  </v-data-table>
  <v-dialog 
    v-model="addDialogDestroy" 
    dark 
    persistent 
    max-width="600px"
  >
    <v-card class="">
      <v-card-title>Deletar Item</v-card-title>
      <v-divider></v-divider>
      <v-card-text>Deseja deletar esse item?</v-card-text>
      <v-row class="mb-0 mr-2">
        <v-spacer></v-spacer>
        <v-btn class="error mr-2 mb-2" @click="addDialogDestroy=false">Cancelar</v-btn>
        <v-btn class="primary mr-4 mb-2" @click="destroy_item()">Confirmar</v-btn>
      </v-row>
    </v-card>
  </v-dialog>
  </div>
</template>

<script>
import AddDialog from "./AddDialog/AddDialog";
import { ADD_ENTRADA, DESTROY_ENTRADA, UPDATE_ENTRADA } from "../../store/actions/entrada";
import { mapGetters } from "vuex";

export default {
  components:{
    AddDialog
  },
  data: () => ({
    edit: 1,
    addDialog: false,
    addDialogDestroy: false,
    itemtoUpdate: Object,
    itemtoDestroy: Object,
    itens:{
      date: "",
      name: "",
      description: "",
      valor: "",
    },
    header: [
      {text: "Data", value: "date"},
      {text: "Nome", value: "name"},
      {text: "Descrição", value: "description"},
      {text: "Valor", value: "valor"},
      {text: "Ações", value: "actions", sortable: false}
    ],
    results:[]
  }),

  methods:{
    adicionar(){
      this.addDialog = !this.addDialog
     // console.log(this.addDialog); 
    },

    cancel(){
      this.addDialog = !this.addDialog
      this.itemtoUpdate = {}
      this.itens = {}
      this.edit = 1
    },

    edit_addDialog(item){
      this.itemtoUpdate = item;
      this.edit = 2
      this.adicionar();
    },

    deleteItem(item){
      this.itemtoDestroy = item;
      this.addDialogDestroy = !this.addDialogDestroy;
    },

    destroy_item(){
      let destroy = Object.assign({}, this.itemtoDestroy)
      this.$store.dispatch(DESTROY_ENTRADA, destroy);
      this.addDialogDestroy = !this.addDialogDestroy;
    },

    submit(){
      this.edit == 2 ? this.edit_item():this.create()
    },

    async create(){
      //let aux = { ...this.itens }
      let entrada = {
        date: this.itens.date,
        name: this.itens.name,
        description: this.itens.description,
        valor: this.itens.valor
      }
      await this.$store.dispatch(ADD_ENTRADA, entrada);
      this.cancel();
    },

    async edit_item(){
      //let aux = Object.values(this.itens)
      let entrada = {
        date: this.itens.date,
        name: this.itens.name,
        description: this.itens.description,
        valor: this.itens.valor
      }
      await this.$store.dispatch(UPDATE_ENTRADA, entrada);
      this.edit = 1;
      this.cancel();
    }
  },

  computed:{
    ...mapGetters(["getEntrada"])
  },

  watch:{
    getEntrada: function(val){
      this.results = val;
      this.results.forEach(e => {
        e.date = e.date.split("-").reverse().join("/")
      });
    }
  }
}
</script>

<style>

</style>