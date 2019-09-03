import { http } from '@/libs/axios'

export function Login(params: any) {
    return http.get('/login',{params:params})
}