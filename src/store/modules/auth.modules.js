import axios from "axios"

export default{
    namespaced: true,
    state(){
        return{
            token : localStorage.getItem('jwt-token')
        }
    },
    mutations: {
        setToken(state, token){
            state.token = token
            localStorage.setItem('jwt-token', token)
        },
        logut(state){
            state.token = null
            localStorage.removeItem('jwt-token')
        }
    },
    actions:{
        async login({commit}, payload){
            try{
                const url = `https://aoutoapi.dezinfeksiyatashkent.uz/api/auth/signin`
                const {data} = axios.post(url,{ ...payload, returnSecureToken:true})
                commit('setToken', data.idToken)
                console.log(data)
            }
            catch(e){
                console.log(e)
            }
       

        }
    },
    getters: {
        token(state){
            return state.token
        },
        isAuthenticated(_,getters){
            return !!getters.token
        }
    }
}