import { Commit } from 'vuex';
import { getall } from '@/api/customer';



const state: any = {
    customerlist: []
}

const mutations: any = {
    UPATE_CUSTOMERLIST: ((state: any, payload: Array<any>) => {
        state.customerlist = payload
    })
}

const actions: any = {
    async GetCustomerList(context: { commit: Commit }, params: any) {
        let result;
        await getall(params).then(res => {
            context.commit('UPATE_CUSTOMERLIST', res.data)
            result=res.data

            return Promise.resolve(result)
        }).catch(err=>{
            result=err;
            return Promise.reject(result)
        })
        
        // if(!!result){
        //     // 发生异常
            
        // }

        // return Promise.resolve(result)
    }
}

export default { namespaced: true, state, mutations, actions }