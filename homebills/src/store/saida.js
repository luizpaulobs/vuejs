const {
    GET_ALL_SAIDA,
    ADD_SAIDA,
    UPDATE_SAIDA,
    DESTROY_SAIDA
} = require("./actions/saida");

const moduleSaida = {
    state: () => ({
        saida: []
    }),

    mutations: {
        GET_ALL_SAIDA: (state, payload) => {
            state.saida = payload
        },

        ADD_SAIDA: (state, payload) => {
            state.saida = payload
        },

        UPDATE_SAIDA: (state, payload) => {
            state.saida.Update(payload)
        },

        //DESTROY_SAIDA: (state, payload) => {
        //    let aux = {...state.saida}
        //}
    },

    actions:{
        GET_ALL_SAIDA({commit}, payload){
            commit(GET_ALL_SAIDA, payload)
        },

        ADD_SAIDA({commit}, payload){
            commit(ADD_SAIDA, payload)
        },

        UPDATE_SAIDA({commit}, payload){
            commit(UPDATE_SAIDA, payload)
        },

        DESTROY_SAIDA({commit}, payload){
            commit(DESTROY_SAIDA, payload.id)
        },
    },

    getters:{
        getSaida: (state) => ({
            ...state.saida
        }),
    },
};

export default moduleSaida;