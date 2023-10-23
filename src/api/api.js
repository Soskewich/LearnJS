import axios from "axios";


const instance = axios.create({
    withCredentials: true
})
export const getUsers = (currentPage =1, pageSize = 10) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
        .then(response =>{
            return response.data});

}


