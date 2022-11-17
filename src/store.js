import { reactive } from "vue"
import axios from 'axios'

export const store = reactive({
    API_URL: "https://api.themoviedb.org/3/search/",
    cover_URL: "https://image.tmdb.org/t/p/",
    results: [],
    series: [],
    error: null,
    integerVote: null,
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
    src: '',
    checkFlag(movie) {
        if (movie.original_language === "it") {
            return "../assets/img/italian_flag.png"
        } else if (movie.original_language === "en") {
            return "../assets/img/great_britain_flag.png"
        } else if (movie.original_language === "fr") {
            return "../assets/img/france_flag.png"
        }
    },
    starsVote(vote) {

        if (vote === 0 || vote === 1 || vote === 2) {
            return "one star"
        } else if (vote === 3 || vote === 4) {
            return "two stars"
        } else if (vote === 5 || vote === 6) {
            return "three stars"
        } else if (vote === 7 || vote === 8) {
            return "four stars"
        } else if (vote === 9 || vote === 10) {
            return "five stars"
        }

    }

})