const {
    GET_ALL_ENTRADA,
    ADD_ENTRADA,
    UPDATE_ENTRADA,
    DESTROY_ENTRADA
} = require("./actions/entrada");

const moduleEntrada = {
    state: () => ({
        entrada: []
    }),

    mutations: {
        GET_ALL_ENTRADA: (state, payload) => {
            state.entrada = payload
        },

        ADD_ENTRADA: (state, payload) => {
            console.log(100, payload);
            state.entrada.push(payload)
        },

        UPDATE_ENTRADA: (state, payload) => {
            //state.entrada.Update(payload)
            console.log('aquiluiz', payload);
            let aux = [...state.entrada]
            let index = aux.indexOf(
                aux.find(e => e.id == payload.id)
            )
            aux[index] = payload
            state.entrada = [...aux]
        },

        DESTROY_ENTRADA: (state, payload) => {
           let aux = [...state.entrada]
           let index = aux.indexOf(
               aux.find(e => e.id === payload)
           );
           if(index >= 0){
               aux.splice(index, 1);
           }
           state.entrada = [...aux];
        }
    },

    actions:{
        GET_ALL_ENTRADA({commit}, payload){
            commit(GET_ALL_ENTRADA, payload)
        },

        ADD_ENTRADA({commit}, payload){
            console.log(500, payload);
            commit(ADD_ENTRADA, payload)
        },

        UPDATE_ENTRADA({commit}, payload){
            commit(UPDATE_ENTRADA, payload)
        },

        DESTROY_ENTRADA({commit}, payload){
            commit(DESTROY_ENTRADA, payload.id)
        },
    },

    getters:{
        getEntrada: (state) => ([
            ...state.entrada
        ]),
    },
};

export default moduleEntrada;