import axios from 'axios'
const login =()=>{
    return axios.post('http://localhost:8000/api/login')
    .then(res=>{return res})
    
}