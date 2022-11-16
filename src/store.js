import { reactive } from "vue"
import axios from 'axios'

export const store = reactive({
    API_URL: "https://api.themoviedb.org/3/search/",
    results: [],
    series: [],
    error: null,
    params: {
        api_key: "047ca6274f89e4b26bb7a49cbb2609b4",
        query: "l"
    },
    callApi(url) {

        const newUrl = `${url}movie?api_key=${this.params.api_key}&query=${this.params.query}`

        const seriesUrl = `${url}tv?api_key=${this.params.api_key}&query=${this.params.query}`

        axios.get(newUrl)
            .then(response => {
                this.results = response.data.results
                // this.series = response.data.results
            })
            .catch(err => {
                console.error(err.message);
                this.error = err.message
            })

        axios.get(seriesUrl)
            .then(response => {

                this.series = response.data.results
            })
            .catch(err => {
                console.error(err.message);
                this.error = err.message
            })

    },
    searchText: '',
    src: ''

})