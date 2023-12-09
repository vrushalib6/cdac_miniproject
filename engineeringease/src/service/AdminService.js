import axios from "axios";


export async function login(credentials){
    const response=await axios.post(`http://127.0.0.1:8900/admin/login`,credentials);
    return response.data;
}

export async function saveStudent(studentData){  //give regi info to login user
    try {
        const response=await axios.post(`http://127.0.0.1:8900/admin`,studentData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}