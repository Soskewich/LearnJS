import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
    "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => {
                return response.data});

    },

    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(currUserId){
        return instance.get(`profile/`+ currUserId);
    },


}

export const authAPI = {
    me() {
        instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, )
    },
}


