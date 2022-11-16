import { reactive } from "vue"
import axios from 'axios'

export const store = reactive({
    API_URL: "https://api.themoviedb.org/3/movie/550?api_key=047ca6274f89e4b26bb7a49cbb2609b4",
    results: [],
    error: null,
    methods: {

        callApi(url) {
            axios.get(url)
                .then(response => {
                    this.results = response.results
                })
                .catch(err => {
                    console.error(err.message);
                    this.error = err.message
                })

        }

    }

})