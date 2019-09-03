import {http} from '@/libs/axios'

export function getall(params:any){
    return http({
        url:'/customer/getall',
        method:'get',
        params
    })
}

export function public_getall(params:any){
    return http({
        url:'/public_customer/getall',
        method:'get',
        params
    })
}