import axios from "axios"

const userDtat = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

// const weatherApi = axios.create({
//     baseURL: 'https://api.openweathermap.org'
// });

const profileService = {


getUserDtas: async () => {
    const response = await userDtat.get(
        `/users`
    );
       return response
},


}

export default profileService;

