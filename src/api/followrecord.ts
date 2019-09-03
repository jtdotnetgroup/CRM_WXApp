import {http} from '@/libs/axios'

export function getall(params:any){
    return http({
        url:'/followrecord/getall',
        method:'get',
        params
    })
}