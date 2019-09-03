import {Login} from '@/api/account'
import { Commit } from 'vuex';

const state:any={
    userName:undefined
}

const mutations:any= {
    SET_USERNAME(state:any, payload:any) {
        state.userName = payload;
    }
}

const actions:any={
    login(context:{commit:Commit},params:any){
        Login(params)
        .then(res=>{
            context.commit('SET_USERNAME',res.data.userName)
            return Promise.resolve(res)
        })
    }
}

const store={
    namespaced:true,
    state:state,
    mutations:mutations,
    actions:actions
}

export default store