import axios from "axios";


const URL = process.env.REACT_APP_API_BASE_URL;

export function registerUser(userdata){
  axios.post(`http://localhost:8080/api/v1/user/register?`, userdata)
    .then((result) => {
      return result;
    }) 
    .catch(error => console.error(error))
}
