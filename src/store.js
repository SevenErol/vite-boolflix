import { reactive } from "vue"
import axios from 'axios'

export const store = reactive({
    API_URL: "https://api.themoviedb.org/3/search/movie?api_key=047ca6274f89e4b26bb7a49cbb2609b4&language=it-IT&query=Matrix&page=1&include_adult=false",
    results: [],
    error: null,
    params: {
        api_key: "047ca6274f89e4b26bb7a49cbb2609b4",
        query: "Matrix"
    },
    callApi(url) {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                this.results = response.data.results
            })
            .catch(err => {
                console.error(err.message);
                this.error = err.message
            })

    }


})