import axios from "axios";


export async function fetchStudents(){
    try {
        const response=await axios.get(`http://127.0.0.1:8900/student`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveStudent(studentData){
    try {
        const response=await axios.post(`http://127.0.0.1:8900/student`,studentData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteStudent(email){
    try {
        const response=await axios.delete(`http://127.0.0.1:8900/student/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchStudentByRoll(email){
    try {
        const response=await axios.get(`http://127.0.0.1:8900/student/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateStudent(updatedData,email){
    try {
        const response=await axios.put(`http://127.0.0.1:8900/student/${email}`,updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}