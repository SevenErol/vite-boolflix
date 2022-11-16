import { reactive } from "vue"
import axios from 'axios'

export const store = reactive({
    API_URL: "https://api.themoviedb.org/3/search/movie",
    results: [],
    error: null,
    params: {
        api_key: "047ca6274f89e4b26bb7a49cbb2609b4",
        query: "l"
    },
    callApi(url) {

        const newUrl = `${url}?api_key=${this.params.api_key}&query=${this.params.query}`

        axios.get(newUrl)
            .then(response => {
                this.results = response.data.results
            })
            .catch(err => {
                console.error(err.message);
                this.error = err.message
            })

    },
    searchText: ''


})